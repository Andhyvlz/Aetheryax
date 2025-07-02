import { useState } from 'react'
import reactLogo from './assets/react.svg'
import typescriptLogo from './assets/typescript.svg'
import ScssLogo from './assets/scss.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import './styles/main.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank">
          <img src={typescriptLogo} className="logo typescript" alt="TypeScript logo" />
        </a>
        <a href="https://sass-lang.com" target="_blank">
          <img src={ScssLogo} className="logo scss" alt="SCSS logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + (Typescript + Scss + React)</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
