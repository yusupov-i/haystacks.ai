import styles from './Hero.module.scss';

import Container from '../../components/Container';
import Button from '../../components/Button';

import img from '../../assets/img/hero-img01.jpg';
import Image from 'next/image';

export default function Hero({ title, subTitle }) {
  return (
    <section className={styles.section}>
      <Container>
        <>
          {title && <h1 className={styles.title}>{title}</h1>}
          {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
          <div className={styles.btnHolder}>
            <Button href="/" size="xl">
              Request demo
            </Button>
            <Button variant="link">learn more</Button>
          </div>
        </>
      </Container>
      <div className={styles.bg}>
        <Image src={img} objectFit="cover" layout="fill" />
      </div>
    </section>
  );
}
