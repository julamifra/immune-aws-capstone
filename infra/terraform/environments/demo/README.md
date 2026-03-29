# Terraform Demo Environment

This environment creates the AWS infrastructure currently deployed for the demo and lab setup.

## Resources created

- 1 S3 bucket for frontend static files
- 1 S3 bucket for blog assets
- 1 DynamoDB table for blog posts
- 1 Lambda function to list published blog posts
- 1 Lambda function to log frontend events to CloudWatch
- 1 API Gateway HTTP API with route `GET /blog`
- 1 API Gateway HTTP API with route `POST /events`
- S3 website configuration for the frontend (`index.html` fallback for SPA routes)
- Public-read access for demo frontend files and demo blog assets
- Server-side encryption (AES256)
- Object versioning for both buckets

## Notes about IAM in the lab

Lambda and API Gateway are deployed with Terraform in this environment.

The only part not created by Terraform in the lab is the execution role. The Lambda reuses the existing `LabRole`, which must keep permissions to:

- write logs to CloudWatch
- read the `BlogPosts` DynamoDB table
- query the `status-publishedAt-index`

## Usage

1. Ensure AWS credentials are available in your terminal (`aws configure`, AWS profile, or environment variables).
2. Copy the example variables:
   - `terraform.tfvars.example` -> `terraform.tfvars`
3. Set globally unique values for:
   - `frontend_bucket_name`
   - `assets_bucket_name`
4. Set values for:
   - `blog_posts_table_name`
   - `lambda_execution_role_name`
5. Run:

```bash
terraform init
terraform plan
terraform apply
```

## Useful outputs

After apply, Terraform prints values such as:

- `frontend_website_endpoint`
- `assets_public_base_url`
- `blog_posts_table_name`
- `blog_posts_slug_index_name`
- `blog_posts_status_published_at_index_name`
- `blog_lambda_execution_role_name`
- `blog_lambda_execution_role_arn`
- `blog_list_posts_lambda_name`
- `frontend_event_logger_lambda_name`
- `blog_api_endpoint`
- `blog_posts_route_url`
- `frontend_events_route_url`

## Demo blog seed

From the project root, you can insert a small set of demo blog posts with:

```bash
npm run seed:blog:demo
```

Then run:

```bash
npm run tf:demo:output
```

And test the `blog_posts_route_url` output to validate the first blog API endpoint.
