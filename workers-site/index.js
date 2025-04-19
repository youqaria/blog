/**
 * Simple worker script for Cloudflare Workers
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Get the URL from the request
  const url = new URL(request.url);

  // Return a simple response
  return new Response(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Next.js + Sanity Blog</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      max-width: 650px;
      margin: 40px auto;
      padding: 0 20px;
      line-height: 1.6;
    }
    h1 { color: #0070f3; }
    a { color: #0070f3; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>Next.js + Sanity Blog</h1>
  <p>This is a placeholder page for your blog. Your actual site is being deployed.</p>
  <p>Please check the Cloudflare dashboard for your actual site URL.</p>
  <p>For better results, consider using <a href="https://pages.cloudflare.com/">Cloudflare Pages</a> for your Next.js application.</p>
</body>
</html>`, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
    },
  });
}
