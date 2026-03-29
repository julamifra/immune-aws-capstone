param(
  [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$tfDir = Join-Path $repoRoot "infra\terraform\environments\demo"

if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
  throw "AWS CLI no esta instalado o no esta en PATH."
}

if (-not (Get-Command terraform -ErrorAction SilentlyContinue)) {
  throw "Terraform CLI no esta instalado o no esta en PATH."
}

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
  throw "npm no esta instalado o no esta en PATH."
}

if (-not (Test-Path (Join-Path $tfDir "terraform.tfvars"))) {
  throw "Falta infra/terraform/environments/demo/terraform.tfvars. Ejecuta primero la configuracion de Terraform."
}

Push-Location $repoRoot

try {
  if (-not $SkipBuild) {
    npm run build
  }

  if (-not (Test-Path "dist")) {
    throw "No existe la carpeta dist. Ejecuta el build antes del despliegue."
  }

  $bucketName = terraform -chdir="$tfDir" output -raw frontend_bucket_name

  if (-not $bucketName) {
    throw "No se pudo obtener frontend_bucket_name desde Terraform. Asegurate de haber aplicado la infraestructura."
  }

  aws s3 sync .\dist\ "s3://$bucketName/" --delete

  $websiteEndpoint = terraform -chdir="$tfDir" output -raw frontend_website_endpoint
  Write-Host ""
  Write-Host "Frontend desplegado en: http://$websiteEndpoint"
}
finally {
  Pop-Location
}
