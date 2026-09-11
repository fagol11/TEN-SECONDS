Add-Type -AssemblyName System.Drawing

$sourceIconPath = "C:\Users\fabri\.gemini\antigravity-ide\brain\b267b0b1-6d77-4920-ae13-77a032739746\media__1786538149156.jpg"
$baseDir = "d:\Antigravity\TEN SECONDS"

# Load source image
$srcImg = [System.Drawing.Image]::FromFile($sourceIconPath)

# Color: #09090d dark obsidian
$bgColor = [System.Drawing.Color]::FromArgb(255, 9, 9, 13)

function Create-Splash {
    param(
        [int]$Width,
        [int]$Height,
        [string]$DestinationPath
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

    # Fill background
    $brush = New-Object System.Drawing.SolidBrush $bgColor
    $graphics.FillRectangle($brush, 0, 0, $Width, $Height)
    $brush.Dispose()

    # Calculate centered logo size (approx 35% of min dimension)
    $minDim = [Math]::Min($Width, $Height)
    $logoSize = [int]($minDim * 0.40)
    if ($logoSize -lt 96) { $logoSize = 96 }
    if ($logoSize -gt $minDim) { $logoSize = [int]($minDim * 0.8) }

    $logoX = [int](($Width - $logoSize) / 2)
    $logoY = [int](($Height - $logoSize) / 2)

    # Draw rounded rectangle clip for logo
    $cornerRad = [int]($logoSize * 0.22)
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddArc($logoX, $logoY, $cornerRad * 2, $cornerRad * 2, 180, 90)
    $path.AddArc($logoX + $logoSize - $cornerRad * 2, $logoY, $cornerRad * 2, $cornerRad * 2, 270, 90)
    $path.AddArc($logoX + $logoSize - $cornerRad * 2, $logoY + $logoSize - $cornerRad * 2, $cornerRad * 2, $cornerRad * 2, 0, 90)
    $path.AddArc($logoX, $logoY + $logoSize - $cornerRad * 2, $cornerRad * 2, $cornerRad * 2, 90, 90)
    $path.CloseFigure()

    $oldClip = $graphics.Clip
    $graphics.SetClip($path)
    $graphics.DrawImage($srcImg, $logoX, $logoY, $logoSize, $logoSize)
    $graphics.Clip = $oldClip
    $path.Dispose()

    $graphics.Dispose()

    $destBitmap.Save($DestinationPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $destBitmap.Dispose()
    Write-Host "Created Splash: $DestinationPath ($($Width)x$($Height))"
}

# Update all 26 splash locations
$splashDirs = Get-ChildItem -Path "$baseDir\android\app\src\main\res" -Directory -Filter "drawable*"

foreach ($dir in $splashDirs) {
    $folderName = $dir.Name
    $targetPath = Join-Path $dir.FullName "splash.png"
    
    # Estimate standard sizes based on folder qualifier
    $w = 480
    $h = 800

    if ($folderName -match "land") {
        if ($folderName -match "xxxhdpi") { $w = 1920; $h = 1080 }
        elseif ($folderName -match "xxhdpi") { $w = 1600; $h = 960 }
        elseif ($folderName -match "xhdpi") { $w = 1280; $h = 720 }
        elseif ($folderName -match "hdpi") { $w = 800; $h = 480 }
        elseif ($folderName -match "mdpi") { $w = 480; $h = 320 }
        elseif ($folderName -match "ldpi") { $w = 320; $h = 200 }
        else { $w = 1280; $h = 720 }
    } else {
        if ($folderName -match "xxxhdpi") { $w = 1080; $h = 1920 }
        elseif ($folderName -match "xxhdpi") { $w = 960; $h = 1600 }
        elseif ($folderName -match "xhdpi") { $w = 720; $h = 1280 }
        elseif ($folderName -match "hdpi") { $w = 480; $h = 800 }
        elseif ($folderName -match "mdpi") { $w = 320; $h = 480 }
        elseif ($folderName -match "ldpi") { $w = 200; $h = 320 }
        else { $w = 720; $h = 1280 }
    }

    Create-Splash -Width $w -Height $h -DestinationPath $targetPath
}

$srcImg.Dispose()
Write-Host "All Splash screens updated with new '10' logo!"
