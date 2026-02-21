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
    js: `/**
 * @umituz/atomic-next v2.0.0
 * Atomic design system for Next.js
 * https://umituz.com/opensource/atomic-next
 */`,
  },
})
