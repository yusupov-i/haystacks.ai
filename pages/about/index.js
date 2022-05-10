import Head from 'next/head';

import data from '../../data/about.js';

import HeroInner from '../../components/HeroInner/index.js';
import PersonSection from '../../sections/PersonSection/index.js';
import PersonList from '../../components/PersonList/index.js';
import Motion from '../../components/Motion/index.js';

export default function About() {
  return (
    <>
      <Head>
        <title>Haystacks.ai Technology</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroInner {...data.hero} variant="left" />
      <PersonSection>
        {data.staff.map((department, i) => (
          <div
            key={i}
            style={{ marginBottom: i + 1 < data.staff.length ? '80px' : '' }}
          >
            <h2 style={{ marginBottom: '1.25em' }}>
              {i === 0 ? (
                <Motion delayIndex={2.8}>{department.title}</Motion>
              ) : (
                <Motion>{department.title}</Motion>
              )}
            </h2>
            <PersonList cards={department.list} />
          </div>
        ))}
      </PersonSection>
    </>
  );
}
