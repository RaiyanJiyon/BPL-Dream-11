import { useState } from 'react'
import './App.css'
import Available from './components/Available/Available'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import Subscribe from './components/Subscribe/Subscribe'
import SelectPlayers from './components/SelectPlayers/SelectPlayers'

function App() {

  const [credit, setCredit] = useState(0);

  const handleCredit = (totalCredit) => {
    setCredit((prev) => prev + totalCredit);
  }

  const [activeTab, setActiveTab] = useState(1);

  const handleActiveTab = (tabValue) => {
    setActiveTab(tabValue);
  }

  const [selected, setSelected] = useState(0);

const handleSelectedPlayers = (player_id, price) => {
  console.log('Player Id', player_id);
  console.log('Player Price', price);
  console.log('Current Price', credit)
  if (price > credit) {
    alert('Insufficient money')
  } else {
    setSelected((prev) => prev + 1);
    console.log('Okay', selected)
  }
} 

  return (
    <>
      <header>
        <Navbar credit={credit}></Navbar>
        <Banner handleCredit={handleCredit}></Banner>
      </header>

      <main>
        <Available handleActiveTab={handleActiveTab} selected={selected}></Available>

        {activeTab === 1 && <Players  handleSelectedPlayers={handleSelectedPlayers} />}
        {activeTab === 2 && <SelectPlayers />}
      </main>

      <footer>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
