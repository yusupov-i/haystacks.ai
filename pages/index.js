import Head from 'next/head';

import data from '../data/home';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Promo from '../components/Promo';
import About from '../components/About';
import Featured from '../components/Featured';
import RequestDemo from '../sections/RequestDemo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Haystacks.ai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero {...data.hero} />
      <Banner text={data.banner} />
      <Promo items={data.promo} />
      <About />
      <Featured items={data.featured} />
      <RequestDemo />
    </>
  );
}
