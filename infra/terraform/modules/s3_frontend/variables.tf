variable "bucket_name" {
  description = "Global unique name for the S3 bucket that hosts the React SPA."
  type        = string
}

variable "force_destroy" {
  description = "Allow Terraform to destroy a non-empty bucket (useful in demo environments)."
  type        = bool
  default     = false
}

variable "enable_versioning" {
  description = "Enable S3 object versioning."
  type        = bool
  default     = true
}

variable "index_document" {
  description = "Default document served by S3 website hosting."
  type        = string
  default     = "index.html"
}

variable "error_document" {
  description = "Error document; for SPA routing, index.html is usually the best value."
  type        = string
  default     = "index.html"
}

variable "tags" {
  description = "Tags applied to created resources."
  type        = map(string)
  default     = {}
}
