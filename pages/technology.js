import Head from 'next/head';

import data from '../data/technology';
import Promo from '../components/Promo';
import HeroInner from '../components/HeroInner';
import Divider from '../components/Divider';

export default function Technology() {
  return (
    <>
      <Head>
        <title>Haystacks.ai Technology</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroInner {...data.hero} />
      <Promo items={data.promo} />
      <Divider />
    </>
  );
}
