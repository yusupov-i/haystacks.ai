import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import data from '../../data/about';
import PersonDetailsSection from '../../sections/PersonDetailsSection';

export default function AboutSingle() {
  const router = useRouter();
  const { id } = router.query;

  const getPersonDetails = () => {
    const staffList = data.staff.reduce((acc, arr) => [
      ...acc.list,
      ...arr.list
    ]);

    return staffList.filter((card) => {
      const nameToId = card.name.toLowerCase().split(' ').join('-');

      return id === nameToId;
    });
  };

  const personDetails = getPersonDetails();

  return (
    <>
      <Head>
        <title>Haystacks.ai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {personDetails[0] ? (
        <PersonDetailsSection data={personDetails[0]} />
      ) : (
        'Page not found'
      )}
    </>
  );
}
