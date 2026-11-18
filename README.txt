Zhongli Jiang — Academic Homepage

Public URL: https://catstats.github.io/
Repository: https://github.com/catstats/catstats.github.io

A static academic homepage with About, Publications, Software, Playground, and Academic Service sections.
The moon/sun button switches between light and dark themes. New visitors start
in light mode with a moon button; a manual choice is saved in the browser.

Edit index.html to update content. Theme behavior is in assets/theme.js.

Playground:
  The #playground section sits between Software and Academic Service.
  It is a home for side projects, interactive demos, and small experiments.
  MacPair is the first project, with its existing app icon and concise introduction.
  Its Learn more and GitHub links point to the public project site and repository.
  Add further playground-project articles as more experiments are ready.
  Each entry can include a title, a short description, and real Demo / Code links.

Traffic analytics:
  Cloudflare Web Analytics is installed for catstats.github.io.
  View statistics in the Cloudflare dashboard under Web Analytics.
  The installation snippet is before the closing body tag in index.html.

Local preview:
  python3 -m http.server 8765 --bind 127.0.0.1

Publishing:
  Commit and push to main. GitHub Pages serves the repository root.
