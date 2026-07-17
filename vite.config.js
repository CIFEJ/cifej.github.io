import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// CSP only on build, dev needs inline scripts and ws for HMR
const csp = {
  name: 'csp',
  apply: 'build',
  transformIndexHtml() {
    return [
      {
        tag: 'meta',
        attrs: {
          'http-equiv': 'Content-Security-Policy',
          content:
            "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; frame-src https://www.google.com; connect-src 'self' https://api.web3forms.com; form-action 'self' https://api.web3forms.com; base-uri 'self'"
        },
        injectTo: 'head'
      }
    ]
  }
}

export default defineConfig({
  base: '/',
  plugins: [vue(), csp],
})
