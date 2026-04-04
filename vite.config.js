import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main:             resolve(__dirname, 'index.html'),
        building:         resolve(__dirname, 'building.html'),
        blog:             resolve(__dirname, 'blog.html'),
        thoughts:         resolve(__dirname, 'thoughts.html'),
        reading:          resolve(__dirname, 'reading.html'),
        videos:           resolve(__dirname, 'videos.html'),
        archive:          resolve(__dirname, 'archive.html'),
      },
    },
  },
})
