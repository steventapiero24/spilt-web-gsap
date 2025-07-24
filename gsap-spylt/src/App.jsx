import React from 'react'
import NavBar from './components/NavBar';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import HeroSection from './sections/HeroSection';
import MessageSection from './sections/MessageSection';
import FlavorSection from './sections/FlavorSection';

gsap.registerPlugin(ScrollTrigger);

export const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <MessageSection />
      <FlavorSection />
      <div className='h-dvh border border-red-500'></div>
    </div>
  )
}

export default App;
