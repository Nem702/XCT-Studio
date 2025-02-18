import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <section className='z-0 min-h-screen bg-slate-400' />
    </main>
  )
}

export default App