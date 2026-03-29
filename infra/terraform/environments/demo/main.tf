provider "aws" {
  region = var.aws_region
}

data "aws_caller_identity" "current" {}

data "aws_partition" "current" {}

locals {
  common_tags = merge(
    {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "Terraform"
    },
    var.tags
  )
  lambda_execution_role_arn = "arn:${data.aws_partition.current.partition}:iam::${data.aws_caller_identity.current.account_id}:role/${var.lambda_execution_role_name}"
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

module "blog_list_posts_lambda" {
  source = "../../modules/lambda_blog_list_posts"

  function_name                  = "${var.project_name}-${var.environment}-blog-list-posts"
  role_arn                       = local.lambda_execution_role_arn
  source_dir                     = "${path.root}/../../../../backend/lambdas/blog/list-posts"
  output_path                    = "${path.root}/${var.project_name}-${var.environment}-blog-list-posts.zip"
  blog_posts_table_name          = module.blog_posts.table_name
  status_published_at_index_name = module.blog_posts.status_published_at_index_name
  tags                           = local.common_tags
}

module "blog_http_api" {
  source = "../../modules/apigatewayv2_http_api_blog_posts"

  api_name             = "${var.project_name}-${var.environment}-blog-api"
  lambda_function_name = module.blog_list_posts_lambda.function_name
  lambda_invoke_arn    = module.blog_list_posts_lambda.invoke_arn
  cors_allow_origins   = var.api_cors_allow_origins
  tags                 = local.common_tags
}
