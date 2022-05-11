import Image from 'next/image';
import Motion from '../Motion';

import styles from './Promo.module.scss';

export default function Promo({ items, ...props }) {
  return (
    <section {...props}>
      {items.map((item, i) => {
        const { img, text, icon, sideShadow } = item;

        return (
          <div className={styles.item} key={i}>
            <div className={styles.img}>
              <Motion animation="fadeIn" threshold={0.35}>
                <Image
                  loading="eager"
                  {...img}
                  layout="fill"
                  objectFit="cover"
                />
              </Motion>
              <div className={styles.imgDecor_top}></div>
              <div className={styles.imgDecor_bottom}></div>
              {sideShadow && <div className={styles.imgDecor_side}></div>}
            </div>
            <div className={styles.info}>
              <Motion animation="fadeInUp" delayIndex={0.45}>
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
              </Motion>
            </div>
          </div>
        );
      })}
    </section>
  );
}
