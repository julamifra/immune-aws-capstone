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

output "assets_bucket_name" {
  description = "Name of the S3 bucket used for blog assets."
  value       = module.blog_assets.bucket_name
}

output "assets_public_base_url" {
  description = "Base URL for public blog assets."
  value       = module.blog_assets.public_base_url
}

output "blog_posts_table_name" {
  description = "Name of the DynamoDB table used for blog posts."
  value       = module.blog_posts.table_name
}

output "blog_posts_slug_index_name" {
  description = "Name of the GSI used to query blog posts by slug."
  value       = module.blog_posts.slug_index_name
}

output "blog_posts_status_published_at_index_name" {
  description = "Name of the GSI used to query published blog posts by date."
  value       = module.blog_posts.status_published_at_index_name
}
