param(
  [string]$TableName
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$tfDir = Join-Path $repoRoot "infra\terraform\environments\demo"

if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
  throw "AWS CLI no esta instalado o no esta en PATH."
}

if (-not $TableName) {
  if (-not (Get-Command terraform -ErrorAction SilentlyContinue)) {
    throw "Terraform CLI no esta instalado o no esta en PATH."
  }

  $TableName = terraform -chdir="$tfDir" output -raw blog_posts_table_name
}

if (-not $TableName) {
  throw "No se pudo resolver el nombre de la tabla BlogPosts."
}

$items = @{
  $TableName = @(
    @{
      PutRequest = @{
        Item = @{
          postId        = @{ S = "demo-post-001" }
          slug          = @{ S = "migracion-demo-aws-frontend-s3" }
          title         = @{ S = "Migracion demo del frontend a S3" }
          excerpt       = @{ S = "Primer post de prueba para validar DynamoDB y la futura integracion del blog en AWS." }
          content       = @{ S = "Este post de prueba documenta el despliegue inicial del frontend en Amazon S3 como parte de la migracion del proyecto hacia AWS." }
          coverImageUrl = @{ S = "" }
          status        = @{ S = "published" }
          publishedAt   = @{ S = "2026-03-29T12:00:00Z" }
          createdAt     = @{ S = "2026-03-29T12:00:00Z" }
          updatedAt     = @{ S = "2026-03-29T12:00:00Z" }
          author        = @{ S = "julam" }
          tags          = @{ L = @(@{ S = "aws" }, @{ S = "terraform" }, @{ S = "frontend" }) }
        }
      }
    },
    @{
      PutRequest = @{
        Item = @{
          postId        = @{ S = "demo-post-002" }
          slug          = @{ S = "siguientes-pasos-backend-serverless-demo" }
          title         = @{ S = "Siguientes pasos del backend serverless" }
          excerpt       = @{ S = "Segundo post de prueba para comprobar listados por fecha y lecturas por slug." }
          content       = @{ S = "Esta entrada de prueba sirve para validar la tabla BlogPosts, sus indices y la futura exposicion mediante API Gateway y Lambda." }
          coverImageUrl = @{ S = "" }
          status        = @{ S = "published" }
          publishedAt   = @{ S = "2026-03-30T12:00:00Z" }
          createdAt     = @{ S = "2026-03-30T12:00:00Z" }
          updatedAt     = @{ S = "2026-03-30T12:00:00Z" }
          author        = @{ S = "julam" }
          tags          = @{ L = @(@{ S = "aws" }, @{ S = "lambda" }, @{ S = "dynamodb" }) }
        }
      }
    }
  )
}

$payload = $items | ConvertTo-Json -Depth 20
$tempFile = Join-Path $env:TEMP "blog-posts-demo-seed.json"

Set-Content -Path $tempFile -Value $payload -Encoding ascii

try {
  aws dynamodb batch-write-item --request-items "file://$tempFile"
}
finally {
  Remove-Item -Path $tempFile -ErrorAction SilentlyContinue
}
