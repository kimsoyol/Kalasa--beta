import About from "./components/About"
import Collection from "./components/Collection"
import Events from "./components/Events"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Events />
      <Collection />
      <About />
      <Footer />
    </>
  )
}
export default App