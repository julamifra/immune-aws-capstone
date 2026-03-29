import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({});

const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 50;

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "content-type": "application/json; charset=utf-8",
  },
  body: JSON.stringify(body),
});

const parseLimit = (value) => {
  const parsed = Number.parseInt(value ?? `${DEFAULT_LIMIT}`, 10);

  if (Number.isNaN(parsed) || parsed <= 0) {
    return DEFAULT_LIMIT;
  }

  return Math.min(parsed, MAX_LIMIT);
};

export const handler = async (event) => {
  const tableName = process.env.BLOG_POSTS_TABLE_NAME;
  const statusPublishedAtIndexName =
    process.env.BLOG_POSTS_STATUS_PUBLISHED_AT_INDEX_NAME;

  if (!tableName || !statusPublishedAtIndexName) {
    console.error("Missing required environment variables.", {
      tableName,
      statusPublishedAtIndexName,
    });

    return json(500, {
      error: "Server misconfiguration",
    });
  }

  const limit = parseLimit(event?.queryStringParameters?.limit);
  const nextToken = event?.queryStringParameters?.nextToken;

  try {
    const command = new QueryCommand({
      TableName: tableName,
      IndexName: statusPublishedAtIndexName,
      KeyConditionExpression: "#status = :status",
      ExpressionAttributeNames: {
        "#status": "status",
      },
      ExpressionAttributeValues: {
        ":status": { S: "published" },
      },
      ScanIndexForward: false,
      Limit: limit,
      ExclusiveStartKey: nextToken
        ? JSON.parse(Buffer.from(nextToken, "base64url").toString("utf8"))
        : undefined,
    });

    const result = await client.send(command);
    const items = (result.Items ?? []).map((item) => unmarshall(item));
    const responseNextToken = result.LastEvaluatedKey
      ? Buffer.from(JSON.stringify(result.LastEvaluatedKey), "utf8").toString(
          "base64url"
        )
      : null;

    console.info("Fetched blog posts.", {
      count: items.length,
      hasMore: Boolean(responseNextToken),
    });

    return json(200, {
      items,
      nextToken: responseNextToken,
    });
  } catch (error) {
    console.error("Failed to fetch blog posts.", {
      message: error.message,
      name: error.name,
    });

    return json(500, {
      error: "Failed to fetch blog posts",
    });
  }
};
