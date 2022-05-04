import promoImg01 from '../assets/img/promo-img02.png';
import promoImg02 from '../assets/img/promo-img03.png';
import promoImg03 from '../assets/img/promo-img04.png';
import promoImg04 from '../assets/img/promo-img05.png';

import promoIcon01 from '../assets/icons/icon-promo-data.svg';
import promoIcon02 from '../assets/icons/icon-promo-source.svg';
import promoIcon03 from '../assets/icons/icon-promo-outcomes.svg';
import promoIcon04 from '../assets/icons/icon-promo-pie.svg';

const data = {
  hero: {
    title: 'Technology',
    subTitle:
      'The Haystacks.AI platform is the most cutting edge SFR aggregation tool, utilizing unique data sets and machine learning models to enable investors to make data backed acquisition and portfolio management decisions.'
  },
  promo: [
    {
      img: {
        src: promoImg01,
        alt: '3D visualisation of a map'
      },
      text: {
        title: 'Powered by best-in-class alternative data',
        subTitle:
          'We are building the largest, best-in-class alternative data repository made up of 300+ metrics to layer on top of traditional demographic and supply data.'
      },
      icon: {
        src: promoIcon01,
        width: 33,
        height: 28.1
      }
    },
    {
      img: {
        src: promoImg02,
        alt: '3D visualisation of a map'
      },
      text: {
        title: 'Source opportunities, smarter and faster',
        subTitle:
          'Utilizing AI/ML we unify traditional and alternative data to identify high yielding properties that are accretive to each unique portfolio’s return goals.'
      },
      icon: {
        src: promoIcon02,
        width: 37,
        height: 32.49
      }
    },
    {
      img: {
        src: promoImg03,
        alt: '3D visualisation of a map'
      },
      text: {
        title: 'Build theses & simulate outcomes',
        subTitle:
          'Projecting growth metrics on a micro-market level and codifying standard real estate underwriting results in a tool capable of refining assumptions on the fly.'
      },
      icon: {
        src: promoIcon03,
        width: 29.07,
        height: 32.49
      }
    },
    {
      img: {
        src: promoImg04,
        alt: '3D visualisation of a map'
      },
      text: {
        title: 'Streamline underwriting & reporting at scale',
        subTitle:
          'Generate actionable reports including institutional return metrics along with automated narrative around the “why” behind the investment decision.'
      },
      icon: {
        src: promoIcon04,
        width: 37,
        height: 32.49
      }
    }
  ]
};

export default data;
