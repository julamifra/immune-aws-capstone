output "table_name" {
  description = "Blog posts table name."
  value       = aws_dynamodb_table.this.name
}

output "table_arn" {
  description = "Blog posts table ARN."
  value       = aws_dynamodb_table.this.arn
}

output "slug_index_name" {
  description = "GSI name used to query by slug."
  value       = "slug-index"
}

output "status_published_at_index_name" {
  description = "GSI name used to list published posts by date."
  value       = "status-publishedAt-index"
}
