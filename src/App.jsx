import './App.css'
// import { motion } from "motion/react"
import Snowfall from "react-snowfall"
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
    <>
      {/* Snowfall layer */}
        <div className="fixed inset-0 z-10 pointer-events-none">
          <Snowfall 
            snowflakeCount={40} 
            color="#e5e7eb"
          />
        </div>

      {/* App content */}
        <div className="relative z-20 min-h-screen">
          <Header />
          <Hero />
          <Projects />
          <Technologies />
          <Experience />
          <Contact />
          <Footer />
        </div>
    </>

    )
}

export default App
