param(
  [ValidateSet("init", "plan", "apply", "output", "destroy")]
  [string]$Action = "plan"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$tfDir = Join-Path $repoRoot "infra\terraform\environments\demo"

if (-not (Get-Command terraform -ErrorAction SilentlyContinue)) {
  throw "Terraform CLI no esta instalado o no esta en PATH."
}

if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
  throw "AWS CLI no esta instalado o no esta en PATH."
}

Push-Location $tfDir

try {
  if (-not (Test-Path "terraform.tfvars")) {
    throw "Falta infra/terraform/environments/demo/terraform.tfvars. Copia terraform.tfvars.example y ajusta sus valores."
  }

  switch ($Action) {
    "init" {
      terraform init
    }
    "plan" {
      terraform init
      terraform plan -out=tfplan
    }
    "apply" {
      terraform init
      if (Test-Path "tfplan") {
        terraform apply tfplan
      }
      else {
        terraform apply
      }
    }
    "output" {
      terraform output
    }
    "destroy" {
      terraform init
      terraform destroy
    }
  }
}
finally {
  Pop-Location
}
