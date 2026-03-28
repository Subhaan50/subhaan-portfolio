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
        archive:          resolve(__dirname, 'archive.html'),
        roboticsRoadmap:  resolve(__dirname, 'posts/robotics-roadmap.html'),
      },
    },
  },
})
