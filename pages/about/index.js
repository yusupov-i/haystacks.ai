import Head from 'next/head';

import data from '../../data/about.js';

import HeroInner from '../../components/HeroInner/index.js';
import ScrollingLogo from '../../components/ScrollingLogo/index.js';
import PersonSection from '../../sections/PersonSection/index.js';
import PersonList from '../../components/PersonList/index.js';

export default function About() {
  const styles = {};

  return (
    <>
      <Head>
        <title>Haystacks.ai Technology</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroInner {...data.hero} variant="left" />
      <ScrollingLogo />
      <PersonSection>
        {data.staff.map((department, i) => (
          <div
            key={i}
            style={{ marginBottom: i + 1 < data.staff.length ? '80px' : '' }}
          >
            <h2 style={{ marginBottom: '1.25em' }}>{department.title}</h2>
            <PersonList cards={department.list} />
          </div>
        ))}
      </PersonSection>
    </>
  );
}
