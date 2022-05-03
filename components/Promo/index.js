import Image from 'next/image';
import Container from '../Container';
import styles from './Promo.module.scss';

export default function Promo({ items }) {
  return (
    <>
      {items.map((item, i) => {
        let { img, text } = item;

        return (
          <div className={styles.item} key={i}>
            <div className={styles.img}>
              <Image {...img} layout="fill" objectFit="cover" />
            </div>
            <div className={styles.info}>
              {text.title && <h2>{text.title}</h2>}
              {text.subTitle && <p>{text.subTitle}</p>}
            </div>
          </div>
        );
      })}
    </>
  );
}
