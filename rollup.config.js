import commonjs from '@rollup/plugin-commonjs'
import rollupJson from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { resolve as _resolve } from "path"
import copy from 'rollup-plugin-copy'

const resolve = (...args) => _resolve(process.cwd(), ...args)

export default function () {
  return {
    input: resolve('src/app.ts'),
    output: {
      dir: 'dist',
      format: 'cjs',
      filename: 'app.js',
    },
    plugins: [typescript(), commonjs(), rollupJson(), nodeResolve({ symlinks: false }),
    copy({
      targets: [
        { src: 'prisma/schema.prisma', dest: 'dist/prisma' },
        {
          src: 'package.json', dest: 'dist/', transform(context) {
            const ctx = JSON.parse(context.toString())
            ctx.type = 'commonjs'
            return Buffer.from(JSON.stringify(ctx, null, 4))
          }
        }
      ],
    })],
    external: ['express', '@cc-heart/utils']
  }
}