import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: true,
  external: ['react', 'react-dom'],
  esbuildOptions: (options, { format }) => {
    if (format === 'esm') {
      options.banner = {
        js: '"use client";'
      }
    }
  },
})