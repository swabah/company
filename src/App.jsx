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
import Service from './Components/Service'

function App() {

  return (
    <>
      <div className="App">
      <NavBar/>
      <MainSection/>
      <What/>
      <Clients/>
      <Service/>
      <Portfolio/>
      <MissionVission/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
