#
# compile.ps1
#

$commandArgs=[string]::Join(" ",(Get-ChildItem *.ts -Name))

tsc $commandArgs --sourcemap --declaration --outDir out