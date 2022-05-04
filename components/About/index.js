import classNames from 'classnames';
import Image from 'next/image';
import styles from './About.module.scss';

import Container from '../Container';

import img from '../../assets/img/about-img01.png';
import Button from '../Button';

export default function About() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={classNames(styles.headline, styles.headline_sm)}>
          <h2 className={styles.headlineTitle}>
            Haystacks.ai unlocks a unique approach through the power of
            alternative data
          </h2>
          <p
            className={classNames(
              styles.headlineSubtitle,
              styles.headlineSubtitle_sm
            )}
          >
            Investors can now underwrite, acquire and manage SFR at scale.
          </p>
        </div>
        <ol className={styles.list}>
          <li>
            Unify traditional and alternative data sources to identify
            sub-market growth, creating tools to refine underwriting assumptions
            on the fly.
          </li>
          <li>
            Drive efficient purchasing through pre-approved location and
            property charcteristic based buy boxes, keeping potfolio aggregation
            top of mind.
          </li>
          <li>
            Maximize value through programmatic partnerships supplemented by
            smart, automated revenue and expense management.
          </li>
        </ol>
        <div className={classNames(styles.headline, styles.headline_md)}>
          <h2
            className={classNames(
              styles.headlineTitle,
              styles.headlineTitle_gradient
            )}
          >
            Built with an institutional mindset, our platform provides
            unparalleled speed and scale in both assembling and managing
            residential portfolios
          </h2>
          <p>
            Haystacks.AI platform has been engineered end to end with direct
            input from institutional investors.
          </p>
        </div>
        <div className={styles.imgHolder}>
          <Image src={img} alt="multiple 3D map layers" />
        </div>
        <div className={styles.headline}>
          <h2
            className={classNames(
              styles.headlineTitle,
              styles.headlineTitle_gradient
            )}
          >
            Our platform uses primary structured data and layers in a
            proprietary repository of alternative data, to identify new
            opportunities for generating alpha.
          </h2>
          <p
            className={classNames(
              styles.headlineSubtitle,
              styles.headlineSubtitle_md
            )}
          >
            Haystacks.AI delivers a full-stack technology platform to streamline
            the entire real estate investing lifecycle. We empower investors to
            discover and capture untapped alpha trapped in residential real
            estate assets.
          </p>
        </div>
        <p className="text-center">
          <Button href="/#section-requestDemo" variant="outline">
            request demo
          </Button>
        </p>
      </Container>
    </section>
  );
}
