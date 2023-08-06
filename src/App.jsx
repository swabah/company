import React from 'react'
import './App.css'
import NavBar from './assets/NavBar'
import MainSection from './Components/MainSection'
import What from './Components/What'
import Clients from './Components/Clients'
import Portfolio from './Components/Portfolio'
import MissionVission from './Components/MissionVission'
import Contact from './Components/Contact'
import Footer from './assets/Footer'

function App() {

  return (
    <>
      <div className="App">
      <NavBar/>
      <MainSection/>
      <What/>
      <Clients/>
      <Portfolio/>
      <MissionVission/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
