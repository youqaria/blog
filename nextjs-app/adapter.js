// Cloudflare Pages adapter for Next.js
export default {
  async fetch(request, env, ctx) {
    // You can add custom logic here before passing to the Next.js app
    
    // Pass the request to the Next.js app
    return env.NEXT_APP.fetch(request, env, ctx);
  }
}
