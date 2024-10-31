import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [activeButton, setActiveButton] = useState(1);

  const handleCredit = (totalCredit) => {
    setCredit((prev) => prev + totalCredit);
    toast('Claim the coin');
    toast.success(`Claim the ${totalCredit} coin`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const [activeTab, setActiveTab] = useState(1);

  const handleActiveTab = (tabValue) => {
    setActiveTab(tabValue);
    setActiveButton(tabValue)
  }

  const [selected, setSelected] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([])

  const handleCountPlayers = (player_id, profile_image, name, batting_style, price) => {
    const isPlayerSelected = selectedPlayers.some(player => player.player_id === player_id)

    console.log(isPlayerSelected)
    if (price > credit) {
      toast.error('Not enough money to buy this player Claim some Credit', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else if (isPlayerSelected) {
      toast.error('Player are already selected', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    } else if (selected >= 5) {
      toast.warn('Player is already 6', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else {
      setSelected((prev) => prev + 1);

      setCredit(credit - price);

      setSelectedPlayers((prev) => [
        ...prev,
        { player_id, profile_image, name, batting_style, price }
      ]);
      toast.success(`Congrats !! ${name} is now in your squad`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }

  const removePlayer = (player_id) => {
    setSelectedPlayers((prevSelected) =>
      prevSelected.filter((player) => player.player_id !== player_id)
    );
    setSelected((prevSelectedCount) => prevSelectedCount - 1);
  };
  

  return (
    <>
      <header>
        <Navbar credit={credit}></Navbar>
        <Banner handleCredit={handleCredit}></Banner>
      </header>

      <main>
        <Available
         handleActiveTab={handleActiveTab} 
         selected={selected} 
         activeButton={activeButton}
         handleActiveButton={setActiveButton}
         />

        {activeTab === 1 && <Players handleSelectedPlayers={handleCountPlayers} />}
        {activeTab === 2 && <SelectPlayers selectedPlayers={selectedPlayers} handleActiveTab={handleActiveTab} removePlayer={removePlayer} />}
      </main>

      <footer>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </footer>

      <ToastContainer />
    </>
  )
}

export default App