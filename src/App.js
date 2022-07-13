import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const updateScroll = () => {
    const { scrollHeight, scrollTop } = document.documentElement;
    const header = document.querySelector('header');
    const headerHeight = header && header.clientHeight ? header.clientHeight : 0;

    if(scrollTop <= headerHeight) return setScrollPercentage(0);

    const scrollPercentage = Math.round((scrollTop - headerHeight) * 100 / (scrollHeight - headerHeight));
    setScrollPercentage(scrollPercentage);
  }

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);

    return () => window.removeEventListener('scroll', updateScroll);
  })

  return (
    <div id='app'>
      <Header scrollPercentage={scrollPercentage} />
      <div className='content'>
        <Main />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
