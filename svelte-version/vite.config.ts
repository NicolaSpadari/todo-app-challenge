import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import SveltePreprocess from 'svelte-preprocess'

export default defineConfig({
  plugins: [svelte({
    preprocess: [
        SveltePreprocess({
            postcss: true
        })
    ]
  })],
  server: {
    host: 'localhost',
    port: 3000
  }
})
