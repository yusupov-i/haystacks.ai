import classNames from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Image from 'next/image';

import styles from './About.module.scss';
import Container from '../Container';
import Button from '../Button';
import Motion from '../Motion';

import img from '../../assets/img/about-img01.png';

export default function About() {
  const control = useAnimation();
  const variants = {
    list: {
      hidden: { opacity: 0 },
      visible: () => ({
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
          type: 'easeOut',
          duration: 0.3
        }
      })
    },
    item: {
      hidden: { opacity: 0, y: '40px' },
      visible: () => ({
        opacity: 1,
        y: 0,
        transition: {
          type: 'easeOut',
          duration: 0.35
        }
      })
    }
  };
  const [ref, inView] = useInView({
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  return (
    <section className={styles.section}>
      <Container>
        <Motion animation="fadeIn">
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
          <motion.ol
            ref={ref}
            initial="hidden"
            animate={control}
            className={styles.list}
            variants={variants.list}
          >
            <motion.li variants={variants.item} className={styles.listItem}>
              Unify traditional and alternative data sources to identify
              sub-market growth, creating tools to refine underwriting
              assumptions on the fly.
            </motion.li>
            <motion.li variants={variants.item} className={styles.listItem}>
              Drive efficient purchasing through pre-approved location and
              property charcteristic based buy boxes, keeping potfolio
              aggregation top of mind.
            </motion.li>
            <motion.li variants={variants.item} className={styles.listItem}>
              Maximize value through programmatic partnerships supplemented by
              smart, automated revenue and expense management.
            </motion.li>
          </motion.ol>
        </Motion>
        <Motion animation="fadeIn">
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
        </Motion>
        <Motion animation="fadeIn">
          <div className={styles.imgHolder}>
            <Image
              loading="eager"
              layout="responsive"
              src={img}
              alt="multiple 3D map layers"
            />
          </div>
        </Motion>
        <Motion animation="fadeIn">
          <div
            className={classNames(styles.headline, styles.headline_margin_half)}
          >
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
              Haystacks.AI delivers a full-stack technology platform to
              streamline the entire real estate investing lifecycle. We empower
              investors to discover and capture untapped alpha trapped in
              residential real estate assets.
            </p>
          </div>
          <p className="text-center">
            <Button href="/#section-requestDemo" variant="outline">
              request demo
            </Button>
          </p>
        </Motion>
      </Container>
    </section>
  );
}
