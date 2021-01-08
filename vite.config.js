import dataUri from '@rollup/plugin-data-uri'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    dataUri(),
  ]
}
