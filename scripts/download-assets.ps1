# Download all original images from the preview website (onicx-next.vercel.app)
# into the local project's public/assets/images folder.
#
# Source of truth: https://onicx-next.vercel.app
# Only downloads files that already exist on the preview server.

$ErrorActionPreference = 'Continue'
$base = 'https://onicx-next.vercel.app'
$root = 'D:\isl new\public'

# All image paths seen on the preview website (pages scanned: /, /index-2 ... /index-6,
# /page-about, /page-services, /page-service-details, /page-project, /page-project-details,
# /page-blog, /page-blog-details, /page-team, /page-team-details, /page-testimonial,
# /page-faq, /page-contact)
$paths = @(
  # top level
  'assets/images/logo.png',
  'assets/images/logo-2.png',
  'assets/images/favicon.png',

  # about
  'assets/images/about/about-four-image.jpg',

  # background
  'assets/images/background/1.jpg',
  'assets/images/background/2.jpg',
  'assets/images/background/3.png',
  'assets/images/background/about3.jpg',
  'assets/images/background/bannar-3.png',
  'assets/images/background/h5-bg.jpg',
  'assets/images/background/home4.jpg',

  # banner
  'assets/images/banner/1.png',
  'assets/images/banner/2-1.jpg',
  'assets/images/banner/author-1.jpg',
  'assets/images/banner/author-2.jpg',
  'assets/images/banner/author-3.jpg',
  'assets/images/banner/author-4.jpg',
  'assets/images/banner/author-5.jpg',
  'assets/images/banner/h5.jpg',
  'assets/images/banner/h5.png',
  'assets/images/banner/man.png',

  # blog
  'assets/images/blog/blog-image1.jpg',
  'assets/images/blog/blog-image2.jpg',
  'assets/images/blog/blog-image3.jpg',

  # choose
  'assets/images/choose/choose-us-image.jpg',

  # clients
  'assets/images/clients/1.png',
  'assets/images/clients/2.png',
  'assets/images/clients/3.png',
  'assets/images/clients/4.png',
  'assets/images/clients/5.png',
  'assets/images/clients/2-1.png',
  'assets/images/clients/2-2.png',
  'assets/images/clients/2-3.png',
  'assets/images/clients/2-4.png',
  'assets/images/clients/2-5.png',
  'assets/images/clients/2-6.png',
  'assets/images/clients/b1.png',
  'assets/images/clients/b2.png',
  'assets/images/clients/b3.png',
  'assets/images/clients/b4.png',
  'assets/images/clients/b5.png',
  'assets/images/clients/bran.png',
  'assets/images/clients/brand2.png',
  'assets/images/clients/brand3.png',
  'assets/images/clients/brand4.png',
  'assets/images/clients/brand5.png',

  # mask
  'assets/images/mask/choose4-mask.png',
  'assets/images/mask/service3-mask.png',
  'assets/images/mask/team3-mask.png',

  # service
  'assets/images/service/service-five-image.jpg',
  'assets/images/service/service-five-image2.jpg',
  'assets/images/service/service-five-image3.jpg',
  'assets/images/service/service-five-image4.jpg',
  'assets/images/service/service-image1.jpg',
  'assets/images/service/service-image2.jpg',
  'assets/images/service/service-image3.jpg',

  # team
  'assets/images/team/team-image1.jpg',
  'assets/images/team/team-image2.jpg',
  'assets/images/team/team-image3.jpg',

  # resource
  'assets/images/resource/1.png',
  'assets/images/resource/2.png',
  'assets/images/resource/3.png',
  'assets/images/resource/4.png',
  'assets/images/resource/about1-1.jpg',
  'assets/images/resource/about2-1.jpg',
  'assets/images/resource/about2-2.jpg',
  'assets/images/resource/benefit1-1.jpg',
  'assets/images/resource/blg-author.png',
  'assets/images/resource/blg-d.jpg',
  'assets/images/resource/blg-details.jpg',
  'assets/images/resource/breadcume.jpg',
  'assets/images/resource/breadcume.png',
  'assets/images/resource/case.jpg',
  'assets/images/resource/case2.jpg',
  'assets/images/resource/case3.jpg',
  'assets/images/resource/case4.jpg',
  'assets/images/resource/contact-img.jpg',
  'assets/images/resource/contact1-1.jpg',
  'assets/images/resource/contact2-1.png',
  'assets/images/resource/cta1-1.png',
  'assets/images/resource/cta1-2.jpg',
  'assets/images/resource/cta1-2.png',
  'assets/images/resource/faq1-1.png',
  'assets/images/resource/h3-ab.jpg',
  'assets/images/resource/h3-ab2.jpg',
  'assets/images/resource/h3-business.png',
  'assets/images/resource/h3-why.jpg',
  'assets/images/resource/h3-why.png',
  'assets/images/resource/h3.jpg',
  'assets/images/resource/h3.png',
  'assets/images/resource/h5-ab.png',
  'assets/images/resource/h5-ab2.png',
  'assets/images/resource/h5-ab3.png',
  'assets/images/resource/h6-cont.png',
  'assets/images/resource/h6-faq.jpg',
  'assets/images/resource/h6-work.jpg',
  'assets/images/resource/haz-img.png',
  'assets/images/resource/home6-ab.jpg',
  'assets/images/resource/home6.jpg',
  'assets/images/resource/news1-1.jpg',
  'assets/images/resource/news1-2.jpg',
  'assets/images/resource/news1-3.jpg',
  'assets/images/resource/proj.png',
  'assets/images/resource/proj2.png',
  'assets/images/resource/project-details.jpg',
  'assets/images/resource/project1-1.jpg',
  'assets/images/resource/project1-2.jpg',
  'assets/images/resource/project1-3.jpg',
  'assets/images/resource/project1-4.jpg',
  'assets/images/resource/project1-5.jpg',
  'assets/images/resource/project2-1.jpg',
  'assets/images/resource/project2-2.jpg',
  'assets/images/resource/project2-3.jpg',
  'assets/images/resource/project2-4.jpg',
  'assets/images/resource/project2.5.jpg',
  'assets/images/resource/project2.6.jpg',
  'assets/images/resource/project2.7.jpg',
  'assets/images/resource/project2.8.jpg',
  'assets/images/resource/ser-details.jpg',
  'assets/images/resource/service1-1.jpg',
  'assets/images/resource/service1-2.jpg',
  'assets/images/resource/service1-3.jpg',
  'assets/images/resource/service2-1.jpg',
  'assets/images/resource/service2-2.jpg',
  'assets/images/resource/service2-3.jpg',
  'assets/images/resource/service2-4.jpg',
  'assets/images/resource/sidebar.jpg',
  'assets/images/resource/sidebar2.jpg',
  'assets/images/resource/sidebar3.jpg',
  'assets/images/resource/team1-1.jpg',
  'assets/images/resource/team1-2.jpg',
  'assets/images/resource/team1-3.jpg',
  'assets/images/resource/team1-4.jpg',
  'assets/images/resource/testi-author-1.png',
  'assets/images/resource/testi-author-2.jpg',
  'assets/images/resource/testi-author-3.jpg',
  'assets/images/resource/testi-author-4.jpg',
  'assets/images/resource/testi-author-5.jpg',
  'assets/images/resource/testi-author3.jpg',
  'assets/images/resource/testi-h3.1.png',
  'assets/images/resource/testi-h3.2 (1).png',
  'assets/images/resource/testi-img.jpg',
  'assets/images/resource/testi1-1.png',
  'assets/images/resource/thumb-1.jpg',
  'assets/images/resource/thumb-2.jpg',
  'assets/images/resource/thumb-3.jpg',
  'assets/images/resource/thumb-4.jpg',
  'assets/images/resource/thumb-5.jpg',
  'assets/images/resource/thumb-6.jpg',
  'assets/images/resource/thumb-7.jpg',
  'assets/images/resource/thumb-8.jpg',
  'assets/images/resource/tm-details.png',
  'assets/images/resource/tm2.1 (1).jpg',
  'assets/images/resource/tm2.2.jpg',
  'assets/images/resource/tm2.3.jpg',
  'assets/images/resource/tm2.4.jpg',
  'assets/images/resource/why-img.jpg',
  'assets/images/resource/why-img2.png',

  # icons
  'assets/images/icons/66.png',
  'assets/images/icons/BG.jpg',
  'assets/images/icons/Blob.png',
  'assets/images/icons/breadcume-be.png',
  'assets/images/icons/contact-sh.png',
  'assets/images/icons/counder.png',
  'assets/images/icons/footer-bg.jpg',
  'assets/images/icons/footer-h4.png',
  'assets/images/icons/fot-5-sh2.png',
  'assets/images/icons/fot-5-sh3.png',
  'assets/images/icons/fot-5-sh4.png',
  'assets/images/icons/fot5-bg.png',
  'assets/images/icons/fot5-sh.png',
  'assets/images/icons/fot5.png',
  'assets/images/icons/foter-h3..png',
  'assets/images/icons/foter-h3.png',
  'assets/images/icons/foter-shape.png',
  'assets/images/icons/Frame.png',
  'assets/images/icons/google.png',
  'assets/images/icons/h-faq-sh.png',
  'assets/images/icons/h-shape.png',
  'assets/images/icons/h3-business.png',
  'assets/images/icons/h3-shape.png',
  'assets/images/icons/h3-shape2.png',
  'assets/images/icons/h4-BG.jpg',
  'assets/images/icons/h4-img.png',
  'assets/images/icons/h4-img2.png',
  'assets/images/icons/h4-sh.png',
  'assets/images/icons/h4-why.png',
  'assets/images/icons/h4.1.png',
  'assets/images/icons/h4.3.png',
  'assets/images/icons/h4.4.png',
  'assets/images/icons/h4.5.png',
  'assets/images/icons/h4.6.png',
  'assets/images/icons/h4.png',
  'assets/images/icons/h44.png',
  'assets/images/icons/h5-ab-icon.png',
  'assets/images/icons/h5-bannar.png',
  'assets/images/icons/h5-img.jpg',
  'assets/images/icons/h5-img.png',
  'assets/images/icons/h5-img2.jpg',
  'assets/images/icons/h5-img2.png',
  'assets/images/icons/h55.jpg',
  'assets/images/icons/h5image.png',
  'assets/images/icons/h6-Vector.png',
  'assets/images/icons/haz-sh.png',
  'assets/images/icons/haz-shape.png',
  'assets/images/icons/home6.1.png',
  'assets/images/icons/home6.2.png',
  'assets/images/icons/icon-1.png',
  'assets/images/icons/icon-2.png',
  'assets/images/icons/icon-3.png',
  'assets/images/icons/icon-4.png',
  'assets/images/icons/icon-5.png',
  'assets/images/icons/icon-6.png',
  'assets/images/icons/icon-7.png',
  'assets/images/icons/icon-8.png',
  'assets/images/icons/icon-9.png',
  'assets/images/icons/icon-10.png',
  'assets/images/icons/icon-11.png',
  'assets/images/icons/icon-12.png',
  'assets/images/icons/icon-13.png',
  'assets/images/icons/icon-14.png',
  'assets/images/icons/icon-15.png',
  'assets/images/icons/icon-16.png',
  'assets/images/icons/icon-17.png',
  'assets/images/icons/icon-18.png',
  'assets/images/icons/icon-19.png',
  'assets/images/icons/icon-20.png',
  'assets/images/icons/icon-21.png',
  'assets/images/icons/icon-22.png',
  'assets/images/icons/icon-23.png',
  'assets/images/icons/icon-24.png',
  'assets/images/icons/icon-25.png',
  'assets/images/icons/icon-26.png',
  'assets/images/icons/icon-27.png',
  'assets/images/icons/icon-28.png',
  'assets/images/icons/icon-29.png',
  'assets/images/icons/icon-30.png',
  'assets/images/icons/icon-31.png',
  'assets/images/icons/icon-32.png',
  'assets/images/icons/icon-33.png',
  'assets/images/icons/icon-34.png',
  'assets/images/icons/icon-35.png',
  'assets/images/icons/icon-36.png',
  'assets/images/icons/icon-37.png',
  'assets/images/icons/icon-h6.png',
  'assets/images/icons/icon-img.png',
  'assets/images/icons/icon-img2.png',
  'assets/images/icons/icon-img3.png',
  'assets/images/icons/icon-lines.png',
  'assets/images/icons/icon-quote.png',
  'assets/images/icons/icon-quote-2.png',
  'assets/images/icons/image 377.png',
  'assets/images/icons/image 378.png',
  'assets/images/icons/image 379.png',
  'assets/images/icons/image 380.png',
  'assets/images/icons/img.jpg',
  'assets/images/icons/logo-h4.png',
  'assets/images/icons/ONICx.png',
  'assets/images/icons/pattern-1.png',
  'assets/images/icons/pattern-2.jpg',
  'assets/images/icons/pattern-3.jpg',
  'assets/images/icons/pattern-4.png',
  'assets/images/icons/pattern-5.jpg',
  'assets/images/icons/pattern-6.png',
  'assets/images/icons/pattern-7.png',
  'assets/images/icons/pattern-8.png',
  'assets/images/icons/pattern-9.jpg',
  'assets/images/icons/pattern-10.jpg',
  'assets/images/icons/pattern-11.png',
  'assets/images/icons/pattern-12.jpg',
  'assets/images/icons/pattern-13.jpg',
  'assets/images/icons/quote.png',
  'assets/images/icons/rrr.png',
  'assets/images/icons/shape-1.png',
  'assets/images/icons/shape-2.png',
  'assets/images/icons/shape-3.png',
  'assets/images/icons/shape-4.png',
  'assets/images/icons/shape-5.png',
  'assets/images/icons/shape-6.png',
  'assets/images/icons/shape-7.png',
  'assets/images/icons/shape-8.png',
  'assets/images/icons/shape-9.png',
  'assets/images/icons/shape-10.png',
  'assets/images/icons/shape-11.png',
  'assets/images/icons/shape-12.png',
  'assets/images/icons/shape-13.png',
  'assets/images/icons/shape-14.png',
  'assets/images/icons/shape-15.png',
  'assets/images/icons/shape-16.png',
  'assets/images/icons/shape-17.png',
  'assets/images/icons/shape-18.png',
  'assets/images/icons/shape-19.png',
  'assets/images/icons/shape-20.png',
  'assets/images/icons/shape-21.png',
  'assets/images/icons/shape-22.png',
  'assets/images/icons/shape-23.png',
  'assets/images/icons/shape-24.png',
  'assets/images/icons/shape-25.png',
  'assets/images/icons/shape-26.png',
  'assets/images/icons/sign.png',
  'assets/images/icons/Testimonial.jpg',
  'assets/images/icons/trustpilot.png'
)

$ok = 0
$failed = 0
$skipped = 0
$failedList = @()

foreach ($p in $paths) {
  $dest = Join-Path $root ($p -replace '/', [IO.Path]::DirectorySeparatorChar)
  $url = "$base/$p"
  try {
    $dir = Split-Path $dest -Parent
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
    Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing -TimeoutSec 60
    $size = (Get-Item $dest).Length
    if ($size -eq 0) {
      Write-Host "FAIL (0 bytes): $p"
      $failed++
      $failedList += $p
    } else {
      Write-Host "OK ($size bytes): $p"
      $ok++
    }
  } catch {
    Write-Host "FAIL: $p -> $($_.Exception.Message)"
    $failed++
    $failedList += $p
  }
}

Write-Host ""
Write-Host "===== SUMMARY ====="
Write-Host "Downloaded OK:  $ok"
Write-Host "Failed:         $failed"
Write-Host "Total:          $($paths.Count)"
if ($failedList.Count -gt 0) {
  Write-Host "Failed files:"
  $failedList | ForEach-Object { Write-Host "  $_" }
}