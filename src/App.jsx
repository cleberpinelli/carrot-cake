import { useState } from 'react'
import reactLogo from './assets/react.svg'
import cakeLogo from './assets/carrot-cake.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <img src={cakeLogo} className="logo cake" alt="Cake logo" />
      </div>
      <h1>Carrot Cake</h1>
    </>
  )
}

export default App
