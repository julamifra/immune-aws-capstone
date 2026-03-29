# Terraform Demo Environment

This environment creates the minimum AWS infrastructure needed for the demo deployment.

## Resources created

- 1 S3 bucket for frontend static files
- 1 S3 bucket for blog assets
- 1 DynamoDB table for blog posts
- S3 website configuration for the frontend (`index.html` fallback for SPA routes)
- Public-read access for demo frontend files and demo blog assets
- Server-side encryption (AES256)
- Object versioning for both buckets

## Usage

1. Ensure AWS credentials are available in your terminal (`aws configure`, AWS profile, or environment variables).
2. Copy the example variables:
   - `terraform.tfvars.example` -> `terraform.tfvars`
3. Set globally unique values for:
   - `frontend_bucket_name`
   - `assets_bucket_name`
4. Set a value for:
   - `blog_posts_table_name`
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

## Demo blog seed

From the project root, you can insert a small set of demo blog posts with:

```bash
npm run seed:blog:demo
```
