import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'next'],
  treeshake: true,
  minify: false,
  splitting: false,
  banner: {
    js: `'use client';
/**
 * @umituz/atomic-next
 * Atomic design system for Next.js
 * https://umituz.com/opensource/atomic-next
 */`,
  },
})
