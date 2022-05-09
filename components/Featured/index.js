import Image from 'next/image';
import Container from '../Container';
import styles from './Featured.module.scss';

export default function Featured({ items }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headline}>
          Haystacks.AI has been featured on:
        </div>
        <div className={styles.list}>
          {items &&
            items.map((item, i) => {
              let { img } = item;

              return (
                <div className={styles.item} key={i}>
                  <Image loading="eager" {...img} />
                </div>
              );
            })}
        </div>
      </Container>
    </section>
  );
}
