const fs = require("fs-extra")
const getPathsObject = require("./getPathsObject")
const formatDate = require("./formatDate")

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://climatemonitor.info/sitemap_local.xml
Disallow:`

fs.writeFileSync("out/robots.txt", robotsTxt)
console.log("robots.txt saved!")

// SITEMAP.XML
const pathsObj = getPathsObject()
const today = formatDate(new Date())

// datasets paths
const datasets = [
  "co2",
  "ch4",
  "sf6",
  "n2o",
  "temperatures",
  "sealevels",
  "glaciers",
]

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.keys(pathsObj)
    .filter(
      (path) =>
        path !== "/_document" && path !== "/_app" && path !== "/data/[dataset]"
    )

    .map(
      (path) => `<url>
    ${
      path === "/index"
        ? `<loc>https://climatemonitor.info</loc>`
        : path === "/data/index"
        ? `<loc>https://climatemonitor.info/data/</loc>`
        : `<loc>https://climatemonitor.info${path}/</loc>`
    }
    <lastmod>${
      pathsObj[path].lastModified
        ? formatDate(new Date(pathsObj[path].lastModified))
        : today
    }</lastmod>
  </url>`
    )}
  ${datasets.map(
    (path) => `<url><loc>https://climatemonitor.info/data/${path}/</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )}
</urlset>`

fs.writeFileSync("out/sitemap_local.xml", sitemapXml)
console.log("sitemap_local.xml saved!")
