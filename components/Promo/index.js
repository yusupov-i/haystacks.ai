import Image from 'next/image';

import Container from '../Container';
import styles from './Promo.module.scss';

export default function Promo({ items }) {
  return (
    <section>
      {items.map((item, i) => {
        const { img, text, icon, sideShadow } = item;

        console.log(icon);
        return (
          <div className={styles.item} key={i}>
            <div className={styles.img}>
              <Image {...img} layout="fill" objectFit="cover" />
              <div className={styles.imgDecor_top}></div>
              <div className={styles.imgDecor_bottom}></div>
              {sideShadow && <div className={styles.imgDecor_side}></div>}
            </div>
            <div className={styles.info}>
              {icon && (
                <div className={styles.icon}>
                  <Image {...icon} className={styles.iconImage} />
                </div>
              )}
              {text.title && <h2 className={styles.title}>{text.title}</h2>}
              {text.subTitle && <p>{text.subTitle}</p>}
            </div>
          </div>
        );
      })}
    </section>
  );
}
