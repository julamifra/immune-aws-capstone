# Terraform Demo Environment

This environment creates the minimum infrastructure to host the React SPA in Amazon S3 static website hosting mode.

## Resources created
- 1 S3 bucket for frontend static files
- S3 website configuration (`index.html` and SPA fallback via `error_document = index.html`)
- Public-read bucket policy for demo access
- Server-side encryption (AES256)
- Object versioning (enabled by default)

## Usage
1. Ensure AWS credentials are available in your terminal (`aws configure`, AWS profile, or environment variables).
2. Copy example variables:
   - `terraform.tfvars.example` -> `terraform.tfvars`
3. Set a globally unique `frontend_bucket_name`.
4. Run:

```bash
terraform init
terraform plan
terraform apply
```

After apply, Terraform prints `frontend_website_endpoint`, which is the URL to validate deployment.
