param(
  [switch]$SkipPlan
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$terraformScript = Join-Path $PSScriptRoot "terraform-demo.ps1"
$deployScript = Join-Path $PSScriptRoot "deploy-frontend-demo.ps1"

if (-not $SkipPlan) {
  & $terraformScript -Action plan
}

& $terraformScript -Action apply
& $deployScript
