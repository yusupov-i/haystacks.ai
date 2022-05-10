import cn from 'classnames';

import styles from './HeroInner.module.scss';
import Container from '../Container';
import Motion from '../Motion';

export default function HeroInner({ title, subTitle, variant = 'center' }) {
  return (
    <section
      className={cn({ [styles[`section_variant_${variant}`]]: variant })}
    >
      <Container>
        <div className={styles.headline}>
          {title && (
            <Motion>
              <h1 className={styles.title}>{title}</h1>
            </Motion>
          )}
          {subTitle && (
            <Motion delayIndex={1.2}>
              <p className={styles.subTitle}>{subTitle}</p>
            </Motion>
          )}
        </div>
      </Container>
    </section>
  );
}
