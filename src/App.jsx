import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas,ResumeDownload } from "./components";

import SocialMedia from "./components/SocialMedia";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <ResumeDownload />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <SocialMedia />
      </div>
    </BrowserRouter>
  );
}

export default App;