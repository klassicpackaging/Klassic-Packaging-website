# Netlify One-Page Site (Static)

## Quick preview (local)
Open `index.html` in your browser.

## Deploy (Netlify + GitHub)
1) Push this folder to a GitHub repo
2) Netlify -> Add new site -> Import from Git
3) Build command: (leave empty)
4) Publish directory: /
5) Deploy

## Custom domain (Cloudflare)
- CNAME @ -> apex-loadbalancer.netlify.com  (DNS only / grey cloud)
- CNAME www -> your-site.netlify.app        (DNS only / grey cloud)

## Edit content
- Replace "Your Company Name" and the contact details in `index.html`
- Replace images inside `/images` as needed
