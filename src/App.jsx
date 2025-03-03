import { useState } from 'react';
import About from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Technologies } from "./components/Technologies";

const App = () => {

  const [language, setLanguage] = useState('en'); // 'en' para inglés, 'es' para español

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'es' : 'en'));
  };
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
      <Navbar language={language} toggleLanguage={toggleLanguage} />
        <Hero  language={language} />
        <About language={language} />
        <Technologies language={language} />
        <Experience language={language} />
        <Contact language={language}  />
      </div>
      <p className="text-xs text-neutral-500 mt-4">Designed by: CompileTab. Coded by Sofía Idárraga with the guide of CompileTab&rsquo;s tutorial.</p>

    </div>
  );
};

export default App;
