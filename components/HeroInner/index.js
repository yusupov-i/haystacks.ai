import cn from 'classnames';

import styles from './HeroInner.module.scss';
import Container from '../Container';

export default function HeroInner({ title, subTitle, variant = 'center' }) {
  return (
    <section
      className={cn({ [styles[`section_variant_${variant}`]]: variant })}
    >
      <Container>
        <div className={styles.headline}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
        </div>
      </Container>
    </section>
  );
}
