import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import TechSection from "./components/tech-section/index";
import ChallengesSection from "./components/challanges-section/index";
import DiscoverSection from "./components/discover-section/index";
import AccelerateSection from "./components/accelerate-section/index";
import FeaturesSection from "./components/features-section/index";
import FrequentlyAsked from "./components/frequently-asked/index";
import ClientSay from "./components/client-say/index";
import ContactSection from "./components/contact-section/index";
import Footer from "./components/footer/index"
function App() {


  return (
    <>
      <Header/>
      <Home />
      <TechSection />
      <ChallengesSection />
      <DiscoverSection />
      <AccelerateSection />
      <FeaturesSection />
      <FrequentlyAsked/>
      <ClientSay/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App
