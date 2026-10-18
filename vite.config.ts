/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    // Netlify publishes this folder (see netlify.toml).
    outDir: 'build',
    target: 'baseline-widely-available',
    // Fonts and the wallpaper are fetched as files, never inlined into CSS.
    assetsInlineLimit: 0,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/Tests/setup.ts',
    css: true,
  },
})
