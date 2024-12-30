import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
  <main className='min-h-screen w-screen overflow-x-hidden'>
    <Navbar/>
    <Hero/>
    <About />
    <section className='w-dvw h-dvh bg-purple-400' />
  </main>
  )
}

export default App