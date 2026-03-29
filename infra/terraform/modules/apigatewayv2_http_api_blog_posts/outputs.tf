output "api_id" {
  description = "HTTP API identifier."
  value       = aws_apigatewayv2_api.this.id
}

output "api_endpoint" {
  description = "Base endpoint of the HTTP API."
  value       = aws_apigatewayv2_api.this.api_endpoint
}

output "posts_route_url" {
  description = "Public URL for the GET /blog route."
  value       = "${aws_apigatewayv2_api.this.api_endpoint}/blog"
}

output "events_route_url" {
  description = "Public URL for the POST /events route."
  value       = var.events_lambda_invoke_arn != null ? "${aws_apigatewayv2_api.this.api_endpoint}/events" : null
}
