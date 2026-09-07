import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/bodyfit/',
  server: {
    allowedHosts: true
  },
  preview: {
    allowedHosts: true
  }
})
