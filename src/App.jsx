import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Menu from './Components/Menu'
import Navbar from './Components/Navbar'
import Reservation from './Components/Reservation'
import Review from './Components/Review'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Menu />
    <Reservation/>
    <Review/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
