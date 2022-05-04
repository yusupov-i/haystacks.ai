import Head from 'next/head';

import data from '../data/technology';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Promo from '../components/Promo';
import About from '../components/About';
import Featured from '../components/Featured';
import RequestDemo from '../sections/RequestDemo';
import HeroInner from '../components/HeroInner';

export default function Technology() {
  return (
    <>
      <Head>
        <title>Haystacks.ai Technology</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroInner {...data.hero} />
      <Promo items={data.promo} />
    </>
  );
}
