import './App.css'
import { motion } from "motion/react"
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <Projects/>
      <Technologies/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
