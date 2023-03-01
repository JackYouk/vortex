import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <nav>
      <a className='logo'>
        <img src='./logo.png' alt='vortex logo' />
      </a>
      {/* <a className='navitem'>
        <img src='./logo.png' alt='vortex logo' />
      </a> */}
    </nav>
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 30]
      }}
    >
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Canvas>
    <Loader containerStyles={{backgroundColor: 'black'}} />
  </>,
)