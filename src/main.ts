import './style.css'
import clockLogo from "./Logo/clock.png";
import buttonLogo from "./Logo/get-started.png";
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${buttonLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${clockLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Components</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
    Click on the BUTTON and CLOCK logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
