import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Preloader from './components/Preloader';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 60, disable: false });
  }, []);

  return (
    <>
      <Preloader onComplete={() => { window.scrollTo(0, 0); setLoaded(true); setTimeout(() => AOS.refresh(), 100); }} />
      <div className={`main-content${loaded ? ' visible' : ''}`}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </>
  );
}
