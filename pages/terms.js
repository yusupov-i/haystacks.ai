import Head from 'next/head';

import data from '../data/terms';
import EntrySection from '../sections/EntrySection';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Haystacks.ai Terms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EntrySection data={data.entry} />
    </>
  );
}
