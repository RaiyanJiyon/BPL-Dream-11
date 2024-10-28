
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Subscribe from './components/Subscribe/Subscribe'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>

      <footer>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
