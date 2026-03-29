variable "table_name" {
  description = "Name of the DynamoDB table for blog posts."
  type        = string
}

variable "billing_mode" {
  description = "Billing mode for the DynamoDB table."
  type        = string
  default     = "PAY_PER_REQUEST"
}

variable "enable_point_in_time_recovery" {
  description = "Enable point-in-time recovery for the table."
  type        = bool
  default     = false
}

variable "tags" {
  description = "Tags applied to the table."
  type        = map(string)
  default     = {}
}
