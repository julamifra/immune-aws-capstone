const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "content-type": "application/json; charset=utf-8",
  },
  body: JSON.stringify(body),
});

const parseBody = (body) => {
  if (!body) {
    return {};
  }

  if (typeof body === "string") {
    return JSON.parse(body);
  }

  return body;
};

export const handler = async (event) => {
  try {
    const payload = parseBody(event?.body);
    const eventType = payload.eventType ?? "unknown_event";

    console.info(
      JSON.stringify({
        message: "Frontend event captured.",
        source: "frontend",
        eventType,
        sessionId: payload.sessionId ?? null,
        path: payload.path ?? null,
        referrer: payload.referrer ?? null,
        userAgent: payload.userAgent ?? null,
        eventData: payload.eventData ?? {},
        requestId: event?.requestContext?.requestId ?? null,
        timestamp: new Date().toISOString(),
      })
    );

    return json(202, {
      accepted: true,
    });
  } catch (error) {
    console.error(
      JSON.stringify({
        message: "Failed to process frontend event.",
        errorName: error.name,
        errorMessage: error.message,
      })
    );

    return json(400, {
      accepted: false,
      error: "Invalid event payload",
    });
  }
};
