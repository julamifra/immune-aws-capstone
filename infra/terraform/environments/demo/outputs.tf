output "frontend_bucket_name" {
  description = "Name of the frontend S3 bucket."
  value       = module.frontend_site.bucket_name
}

output "frontend_website_endpoint" {
  description = "Website endpoint to test the React app."
  value       = module.frontend_site.website_endpoint
}

output "frontend_website_domain" {
  description = "Website domain to test the React app."
  value       = module.frontend_site.website_domain
}
