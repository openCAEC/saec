
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/gustavo/Documents/dev/code/ufsc/public_html/src/pages/404.js")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/gustavo/Documents/dev/code/ufsc/public_html/src/pages/index.tsx"))
}

