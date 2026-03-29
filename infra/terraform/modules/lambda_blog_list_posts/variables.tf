variable "function_name" {
  description = "Lambda function name."
  type        = string
}

variable "role_arn" {
  description = "IAM role ARN assumed by the Lambda function."
  type        = string
}

variable "source_dir" {
  description = "Directory that contains the Lambda source code."
  type        = string
}

variable "output_path" {
  description = "Path of the generated zip package."
  type        = string
}

variable "blog_posts_table_name" {
  description = "DynamoDB BlogPosts table name."
  type        = string
}

variable "status_published_at_index_name" {
  description = "Name of the DynamoDB index used to list published posts."
  type        = string
}

variable "memory_size" {
  description = "Lambda memory size in MB."
  type        = number
  default     = 256
}

variable "timeout" {
  description = "Lambda timeout in seconds."
  type        = number
  default     = 10
}

variable "log_retention_in_days" {
  description = "CloudWatch log retention for the Lambda log group."
  type        = number
  default     = 14
}

variable "tags" {
  description = "Tags applied to Lambda resources."
  type        = map(string)
  default     = {}
}
