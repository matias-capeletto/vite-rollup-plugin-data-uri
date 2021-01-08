import './style.css'

// Example from https://github.com/rollup/plugins/tree/master/packages/data-uri
import batman from "data:application/json;base64, eyAiYmF0bWFuIjogInRydWUiIH0="

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">${batman}</a>
`
