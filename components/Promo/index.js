import Image from 'next/image';

import styles from './Promo.module.scss';

export default function Promo({ items }) {
  return (
    <section>
      {items.map((item, i) => {
        const { img, text, icon, sideShadow } = item;

        return (
          <div className={styles.item} key={i}>
            <div className={styles.img}>
              <Image loading="eager" {...img} layout="fill" objectFit="cover" />
              <div className={styles.imgDecor_top}></div>
              <div className={styles.imgDecor_bottom}></div>
              {sideShadow && <div className={styles.imgDecor_side}></div>}
            </div>
            <div className={styles.info}>
              {icon && (
                <div className={styles.icon}>
                  <Image
                    loading="eager"
                    {...icon}
                    className={styles.iconImage}
                  />
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
