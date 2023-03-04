import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { About, Hero } from '../components/pages/Home';
import Navbar from '../components/widget/Navbar';

const Landing: NextPage = () => {
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log('ds');
      setAttention(true);
    }, 15000);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden font-mono">
      <Head>
        <title>Portfolio - Jorge Marcos Carrero</title>
      </Head>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default Landing;
