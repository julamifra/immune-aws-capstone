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

module "blog_assets" {
  source = "../../modules/s3_assets"

  bucket_name       = var.assets_bucket_name
  force_destroy     = var.force_destroy
  enable_versioning = var.enable_versioning
  tags              = local.common_tags
}

module "blog_posts" {
  source = "../../modules/dynamodb_blog_posts"

  table_name                    = var.blog_posts_table_name
  enable_point_in_time_recovery = var.enable_dynamodb_point_in_time_recovery
  tags                          = local.common_tags
}
