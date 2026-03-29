variable "bucket_name" {
  description = "Global unique name for the S3 bucket that stores blog assets."
  type        = string
}

variable "force_destroy" {
  description = "Allow Terraform to destroy a non-empty bucket."
  type        = bool
  default     = false
}

variable "enable_versioning" {
  description = "Enable S3 object versioning."
  type        = bool
  default     = true
}

variable "tags" {
  description = "Tags applied to created resources."
  type        = map(string)
  default     = {}
}
