variable "aws_region" {
  description = "AWS region for the demo environment."
  type        = string
}

variable "project_name" {
  description = "Project name used for tagging."
  type        = string
}

variable "environment" {
  description = "Environment name (demo, dev, prod)."
  type        = string
  default     = "demo"
}

variable "frontend_bucket_name" {
  description = "Global unique name of the frontend S3 bucket."
  type        = string
}

variable "assets_bucket_name" {
  description = "Global unique name of the S3 bucket used for blog assets."
  type        = string
}

variable "blog_posts_table_name" {
  description = "Name of the DynamoDB table used for blog posts."
  type        = string
}

variable "force_destroy" {
  description = "Allow destroy on non-empty bucket for demo lifecycle."
  type        = bool
  default     = false
}

variable "enable_versioning" {
  description = "Enable bucket versioning."
  type        = bool
  default     = true
}

variable "enable_dynamodb_point_in_time_recovery" {
  description = "Enable point-in-time recovery for DynamoDB blog posts table."
  type        = bool
  default     = false
}

variable "tags" {
  description = "Extra tags to attach to resources."
  type        = map(string)
  default     = {}
}
