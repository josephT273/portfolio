import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className="contentCenter">
          <img src='https://ugc.production.linktr.ee/nOuNk5zXQ0iB35AC2ycS_image?io=true&size=avatar-v3_0' className='round' alt='Joseph Tadesse' />
          <ul>
            <h2>Joseph Tadesse AKA JosephT273</h2>
            <li>Hey their👋, My name is Joseph Tadesse AKA JosephT273.
              <br />I'm Junior full stack developer.</li>
            <li className='link'><a href="https://linktr.ee/josepht273">JosephT273 Linktree</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
