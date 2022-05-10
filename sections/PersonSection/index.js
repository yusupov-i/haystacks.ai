import styles from './Person.module.scss';

import Container from '../../components/Container';
import ScrollingLogo from '../../components/ScrollingLogo';
import Motion from '../../components/Motion';

export default function PersonSection({ children }) {
  return (
    <section className={styles.section}>
      <Motion delayIndex={2}>
        <ScrollingLogo />
      </Motion>
      <Container>{children}</Container>
    </section>
  );
}
