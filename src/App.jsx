import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import Hero from './components/Hero'
import Pricelist from './components/Pricelist'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <BottomNav />
      <Hero />
      <Pricelist />
      <Gallery />
      <Footer />
    </div>
  )
}
