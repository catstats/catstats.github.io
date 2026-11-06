Zhongli Jiang — Academic Homepage

Public URL: https://catstats.github.io/
Repository: https://github.com/catstats/catstats.github.io

A static academic homepage with About, Publications, Software, and Academic Service sections.
The moon/sun button switches between light and dark themes. The initial theme
follows the operating system; a manual choice is saved in the browser.

Edit index.html to update content. Theme behavior is in assets/theme.js.

Traffic analytics:
  Cloudflare Web Analytics is installed for catstats.github.io.
  View statistics in the Cloudflare dashboard under Web Analytics.
  The installation snippet is before the closing body tag in index.html.

Local preview:
  python3 -m http.server 8765 --bind 127.0.0.1

Publishing:
  Commit and push to main. GitHub Pages serves the repository root.
