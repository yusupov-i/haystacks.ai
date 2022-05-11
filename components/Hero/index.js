import ReactPlayer from 'react-player';

import styles from './Hero.module.scss';
import Motion from '../Motion';
import Container from '../../components/Container';
import Button from '../../components/Button';

export default function Hero({ title, subTitle }) {
  return (
    <section className={styles.section}>
      <Container>
        <>
          {title && (
            <h1 className={styles.title}>
              <Motion>{title}</Motion>
            </h1>
          )}
          {subTitle && (
            <p className={styles.subTitle}>
              <Motion delayIndex={0.25}>{subTitle}</Motion>
            </p>
          )}
          <Motion delayIndex={0.5}>
            <div className={styles.btnHolder}>
              <Button href="/#section-requestDemo" size="xl">
                Request demo
              </Button>
              <Button variant="link" href="/#section-promo">
                learn more
              </Button>
            </div>
          </Motion>
        </>
      </Container>
      <Motion animation="fadeIn" delayIndex={0.75}>
        <div className={styles.bg}>
          <ReactPlayer
            playing={true}
            loop={true}
            muted={true}
            playsinline={true}
            width="100%"
            height="100%"
            url="https://haystacks.ai/_next/static/videos/technology-9db37bc78be6fa80bd00822c1d31f4b2.mp4"
          />
        </div>
      </Motion>
    </section>
  );
}
