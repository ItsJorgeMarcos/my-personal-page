import { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/pages/Home/Hero';
import About from '../components/pages/Home/About';
import Projects from '../components/pages/Home/Projects';
import Contact from '../components/pages/Home/Contact';
import Navbar from '../components/widget/Navbar';

const Landing: NextPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-mono">
      <Head>
        <title>Portfolio - Jorge Marcos</title>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Landing;
