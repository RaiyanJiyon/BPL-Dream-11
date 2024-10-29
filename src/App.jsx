import { useState } from 'react'
import './App.css'
import Available from './components/Available/Available'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import Subscribe from './components/Subscribe/Subscribe'

function App() {

  const [credit, setCredit] = useState(0);

  const handleCredit = (totalCredit) => {
    setCredit((prev) => prev + totalCredit);
  }

  return (
    <>
      <header>
        <Navbar credit={credit}></Navbar>
        <Banner handleCredit={handleCredit}></Banner>
      </header>

      <main>
        <Available></Available>
        <Players></Players>
      </main>

      <footer>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
