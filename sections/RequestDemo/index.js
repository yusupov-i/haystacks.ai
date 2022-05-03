import styles from './RequestDemo.module.scss';

import Container from '../../components/Container';
import FormDemo from '../../components/FormDemo';

export default function RequestDemo() {
  return (
    <section className={styles.section}>
      <Container>
        <FormDemo />
      </Container>
    </section>
  );
}
