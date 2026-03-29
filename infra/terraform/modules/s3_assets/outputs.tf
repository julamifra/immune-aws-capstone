output "bucket_name" {
  description = "Assets bucket name."
  value       = aws_s3_bucket.this.id
}

output "bucket_arn" {
  description = "Assets bucket ARN."
  value       = aws_s3_bucket.this.arn
}

output "bucket_regional_domain_name" {
  description = "Regional domain name of the assets bucket."
  value       = aws_s3_bucket.this.bucket_regional_domain_name
}

output "public_base_url" {
  description = "Base URL to reference public assets in the bucket."
  value       = "https://${aws_s3_bucket.this.bucket_regional_domain_name}"
}
