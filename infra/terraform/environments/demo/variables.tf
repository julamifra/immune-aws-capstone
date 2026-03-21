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

variable "tags" {
  description = "Extra tags to attach to resources."
  type        = map(string)
  default     = {}
}
