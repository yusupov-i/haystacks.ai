import Image from 'next/image';

import Motion from '../Motion';
import Container from '../Container';
import styles from './Featured.module.scss';

export default function Featured({ items }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headline}>
          <Motion>Haystacks.AI has been featured on:</Motion>
        </div>
        <div className={styles.list}>
          {items &&
            items.map((item, i) => {
              let { img } = item;

              return (
                <div className={styles.item} key={i}>
                  <Motion delayIndex={i + 0.05}>
                    <Image loading="eager" {...img} />
                  </Motion>
                </div>
              );
            })}
        </div>
      </Container>
    </section>
  );
}
