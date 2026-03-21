provider "aws" {
  region = var.aws_region
}

locals {
  common_tags = merge(
    {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "Terraform"
    },
    var.tags
  )
}

module "frontend_site" {
  source = "../../modules/s3_frontend"

  bucket_name       = var.frontend_bucket_name
  force_destroy     = var.force_destroy
  enable_versioning = var.enable_versioning
  index_document    = "index.html"
  error_document    = "index.html"
  tags              = local.common_tags
}
