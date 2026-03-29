variable "api_name" {
  description = "HTTP API name."
  type        = string
}

variable "lambda_function_name" {
  description = "Lambda function name used by the API route."
  type        = string
}

variable "lambda_invoke_arn" {
  description = "Lambda invoke ARN used by API Gateway integration."
  type        = string
}

variable "events_lambda_function_name" {
  description = "Lambda function name used by the POST /events route."
  type        = string
  default     = null
}

variable "events_lambda_invoke_arn" {
  description = "Lambda invoke ARN used by the POST /events route."
  type        = string
  default     = null
}

variable "cors_allow_origins" {
  description = "Allowed origins for API CORS."
  type        = list(string)
  default     = ["*"]
}

variable "tags" {
  description = "Tags applied to API Gateway resources."
  type        = map(string)
  default     = {}
}
