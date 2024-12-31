import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Feature from './components/Feature'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/footer'

const App = () => {
  return (
  <main className='min-h-screen w-screen overflow-x-hidden'>
    <Navbar/>
    <Hero/>
    <About />
    <Feature />
    <Story />
    <Contact />
    <Footer />
   
  </main>
  )
}

export default App