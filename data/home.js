import promoImg01 from '../assets/img/promo-img01.jpg';

import featuredLogo01 from '../assets/img/featured-logo01.png';
import featuredLogo02 from '../assets/img/featured-logo02.png';
import featuredLogo03 from '../assets/img/featured-logo03.png';
import featuredLogo04 from '../assets/img/featured-logo04.png';

const data = {
  hero: {
    title: (
      <span>
        Machine intelligence for <br />
        residential underwriting.{' '}
        <mark style={{ whiteSpace: 'nowrap' }}>At scale.</mark>
      </span>
    ),
    subTitle: (
      <span>
        Haystacks.AI provides institutional investors access to tools powered by{' '}
        <br /> alternative data that enables underwriting at an unparalleled
        scale.
      </span>
    )
  },
  banner: {
    text: 'Haystacks.AI Secures $5 Million In Seed Funding Led by Streamlined Ventures and Colle Capital',
    href: 'https://www.businesswire.com/news/home/20211216005226/en/Haystacks.AI-Secures-5-Million-In-Seed-Funding-Led-by-Streamlined-Ventures-and-Colle-Capital'
  },
  promo: [
    {
      img: {
        src: promoImg01,
        alt: '3D visualisation of a map'
      },
      text: {
        title: 'Single Family Residential market is exploding',
        subTitle:
          'Yet the market remains fragmented and inefficient. Institutional capital has yet to penetrate this market in a meaningful way.'
      },
      sideShadow: true
    }
  ],
  featured: [
    {
      img: {
        src: featuredLogo01,
        alt: 'The Real Deal logo'
      }
    },
    {
      img: {
        src: featuredLogo02,
        alt: 'Fortune logo'
      }
    },
    {
      img: {
        src: featuredLogo03,
        alt: 'Yahoo finance logo'
      }
    },
    {
      img: {
        src: featuredLogo04,
        alt: 'Bloomberg logo'
      }
    }
  ]
};

export default data;
