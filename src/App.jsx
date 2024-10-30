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
  const [selectedPlayers, setSelectedPlayers] = useState([])

  const handleCountPlayers = (player_id, profile_image, name, batting_style, price) => {

    if (price > credit) {
      alert('Insufficient money')
    } else {
      setSelected((prev) => prev + 1);
      console.log('Okay', selected)
      setSelectedPlayers((prev) => [
        ...prev, 
        { player_id, profile_image, name, batting_style }
      ]);
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

        {activeTab === 1 && <Players handleSelectedPlayers={handleCountPlayers} />}
        {activeTab === 2 && <SelectPlayers selectedPlayers={selectedPlayers} />}
      </main>

      <footer>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App