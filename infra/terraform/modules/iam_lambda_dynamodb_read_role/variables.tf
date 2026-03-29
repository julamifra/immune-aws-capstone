variable "role_name" {
  description = "IAM role name for the Lambda function."
  type        = string
}

variable "table_arn" {
  description = "ARN of the DynamoDB table the Lambda can read."
  type        = string
}

variable "index_arns" {
  description = "ARNs of DynamoDB indexes the Lambda can query."
  type        = list(string)
  default     = []
}

variable "tags" {
  description = "Tags applied to IAM resources."
  type        = map(string)
  default     = {}
}
