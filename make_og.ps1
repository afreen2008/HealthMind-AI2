Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$bmp = [System.Drawing.Bitmap]::new($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Background Gradient
$rect = [System.Drawing.Rectangle]::new(0, 0, $width, $height)
$color1 = [System.Drawing.Color]::FromArgb(255, 7, 89, 133)
$color2 = [System.Drawing.Color]::FromArgb(255, 12, 74, 110)
$brush = [System.Drawing.Drawing2D.LinearGradientBrush]::new($rect, $color1, $color2, 45.0)
$g.FillRectangle($brush, $rect)

# Decorative circle accents
$circleBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(35, 255, 255, 255))
$g.FillEllipse($circleBrush, 900, -100, 450, 450)
$g.FillEllipse($circleBrush, -100, 350, 400, 400)

# Card Container
$cardBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(248, 250, 252))
$g.FillRectangle($cardBrush, 80, 70, 1040, 490)

# Brand Badge
$badgeBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 224, 242, 254))
$g.FillRectangle($badgeBrush, 130, 115, 340, 42)
$badgeFont = [System.Drawing.Font]::new('Arial', [float]12, [System.Drawing.FontStyle]::Bold)
$badgeTextBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 3, 105, 161))
$g.DrawString('+ PERSONAL HEALTH GUIDANCE', $badgeFont, $badgeTextBrush, 145, 127)

# Main Title
$titleFont = [System.Drawing.Font]::new('Arial', [float]38, [System.Drawing.FontStyle]::Bold)
$titleBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 15, 23, 42))
$g.DrawString('HealthMind AI', $titleFont, $titleBrush, 130, 175)

# Subtitle
$subFont = [System.Drawing.Font]::new('Arial', [float]18, [System.Drawing.FontStyle]::Regular)
$subBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 71, 85, 105))
$g.DrawString('Medically Reviewed Lifestyle & Educational Wellness Platform', $subFont, $subBrush, 130, 245)

# Value prop pills
$pillFont = [System.Drawing.Font]::new('Arial', [float]13, [System.Drawing.FontStyle]::Bold)
$pillBg = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 241, 245, 249))
$pillText = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 51, 65, 85))

$g.FillRectangle($pillBg, 130, 305, 280, 52)
$g.DrawString('[V] 100% Client-Side Privacy', $pillFont, $pillText, 145, 322)

$g.FillRectangle($pillBg, 430, 305, 290, 52)
$g.DrawString('[V] Multi-Condition Synergy', $pillFont, $pillText, 445, 322)

$g.FillRectangle($pillBg, 740, 305, 320, 52)
$g.DrawString('[V] 1-Click WhatsApp Sharing', $pillFont, $pillText, 755, 322)

# Bottom strip
$botBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 2, 132, 199))
$g.FillRectangle($botBrush, 130, 395, 940, 105)
$botFont = [System.Drawing.Font]::new('Arial', [float]15, [System.Drawing.FontStyle]::Bold)
$botTextBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::White)
$g.DrawString('Personalized Routines - Sleep Ergonomics - Nutrition & Hydration', $botFont, $botTextBrush, 160, 420)
$botSubFont = [System.Drawing.Font]::new('Arial', [float]11, [System.Drawing.FontStyle]::Regular)
$g.DrawString('Private In-Browser Engine - No External AI Key - Ready for Vercel Deployment', $botSubFont, $botTextBrush, 160, 458)

$outPath = 'C:\Users\afree\.gemini\antigravity\scratch\HealthMind-AI\og-preview.png'
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
Write-Output "Successfully generated $outPath"
