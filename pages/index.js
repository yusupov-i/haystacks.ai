import Head from 'next/head';
import { useEffect } from 'react';

import data from '../data/home';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Promo from '../components/Promo';
import About from '../components/About';
import Featured from '../components/Featured';
import RequestDemo from '../sections/RequestDemoSection';

export default function Home() {
  useEffect(() => {
    document.querySelector('html').classList.add('home-page');
    return () => {
      document.querySelector('html').classList.remove('home-page');
    };
  });

  return (
    <>
      <Head>
        <title>Haystacks.ai Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero {...data.hero} />
      <Banner text={data.banner} />
      <Promo items={data.promo} id="section-promo" />
      <About />
      <Featured items={data.featured} />
      <RequestDemo />
    </>
  );
}
