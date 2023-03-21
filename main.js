import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setup } from './input.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <textarea id="counter"></textarea>
    </div>
  </div>
`

setup(document.querySelector('#counter'))
