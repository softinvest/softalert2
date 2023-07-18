import { readFileSync } from 'fs'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'

const packageJson = JSON.parse(readFileSync('package.json'))
const version = process.env.VERSION || packageJson.version

const banner = `/*!
* ${packageJson.name} v${version}
* Released under the ${packageJson.license} License.
*/`

const footer = `\
if (typeof this !== 'undefined' && this.Softalert2){\
this.swal = this.softAlert = this.Swal = this.SoftAlert = this.Softalert2\
}`

const output = {
  format: 'umd',
  name: 'Softalert2',
  file: 'dist/softalert2.js',
  banner,
  footer,
}

export default {
  plugins: [
    babel({
      babelHelpers: 'bundled',
    }),
  ],
  input: 'src/softalert2.js',
  output: [
    output,
    {
      ...output,
      file: 'dist/softalert2.min.js',
      plugins: [terser()],
    },
  ],
  // https://github.com/rollup/rollup/issues/2271
  onwarn(warning, rollupWarn) {
    if (warning.code !== 'CIRCULAR_DEPENDENCY' && warning.code !== 'THIS_IS_UNDEFINED') {
      rollupWarn(warning)
    }
  },
}
