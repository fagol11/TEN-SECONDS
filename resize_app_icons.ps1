Add-Type -AssemblyName System.Drawing

$sourcePath = "C:\Users\fabri\.gemini\antigravity-ide\brain\b267b0b1-6d77-4920-ae13-77a032739746\media__1786538149156.jpg"
$baseDir = "d:\Antigravity\TEN SECONDS"

# Load source image
$srcImg = [System.Drawing.Image]::FromFile($sourcePath)

function Resize-Image {
    param(
        [System.Drawing.Image]$Image,
        [int]$Width,
        [int]$Height,
        [string]$DestinationPath,
        [bool]$IsRound = $false
    )

    $parentDir = Split-Path -Parent $DestinationPath
    if (-not (Test-Path $parentDir)) {
        New-Item -ItemType Directory -Path $parentDir -Force | Out-Null
    }

    $destBitmap = New-Object System.Drawing.Bitmap $Width, $Height
    $graphics = [System.Drawing.Graphics]::FromImage($destBitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    if ($IsRound) {
        $path = New-Object System.Drawing.Drawing2D.GraphicsPath
        $path.AddEllipse(0, 0, $Width, $Height)
        $graphics.SetClip($path)
    }

    $graphics.DrawImage($Image, 0, 0, $Width, $Height)
    $graphics.Dispose()

    $destBitmap.Save($DestinationPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $destBitmap.Dispose()
    Write-Host "Created: $DestinationPath ($($Width)x$($Height))"
}

# 1. Store Assets
Resize-Image -Image $srcImg -Width 512 -Height 512 -DestinationPath "$baseDir\store_assets\play_store_icon_512.png"
Resize-Image -Image $srcImg -Width 1024 -Height 1024 -DestinationPath "$baseDir\store_assets\app_icon_1024.png"

# 2. Web & Mobile Public Assets
$publicPaths = @(
    "$baseDir\public",
    "$baseDir\mobile\public"
)

foreach ($p in $publicPaths) {
    Resize-Image -Image $srcImg -Width 512 -Height 512 -DestinationPath "$p\logo512.png"
    Resize-Image -Image $srcImg -Width 192 -Height 192 -DestinationPath "$p\logo192.png"
    Resize-Image -Image $srcImg -Width 64 -Height 64 -DestinationPath "$p\favicon.png"
    Resize-Image -Image $srcImg -Width 512 -Height 512 -DestinationPath "$p\icon.png"
}

# 3. Android Mipmaps
$mipmapConfigs = @(
    @{ Name = "mdpi"; Size = 48; ForeSize = 108 },
    @{ Name = "hdpi"; Size = 72; ForeSize = 162 },
    @{ Name = "xhdpi"; Size = 96; ForeSize = 216 },
    @{ Name = "xxhdpi"; Size = 144; ForeSize = 324 },
    @{ Name = "xxxhdpi"; Size = 192; ForeSize = 432 }
)

foreach ($c in $mipmapConfigs) {
    $folder = "$baseDir\android\app\src\main\res\mipmap-$($c.Name)"
    Resize-Image -Image $srcImg -Width $c.Size -Height $c.Size -DestinationPath "$folder\ic_launcher.png"
    Resize-Image -Image $srcImg -Width $c.Size -Height $c.Size -DestinationPath "$folder\ic_launcher_round.png" -IsRound $true
    Resize-Image -Image $srcImg -Width $c.ForeSize -Height $c.ForeSize -DestinationPath "$folder\ic_launcher_foreground.png"
}

$srcImg.Dispose()
Write-Host "All Android icons and store assets updated successfully!"
