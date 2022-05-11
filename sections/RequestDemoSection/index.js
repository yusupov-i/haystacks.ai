import styles from './RequestDemo.module.scss';

import Container from '../../components/Container';
import FormDemo from '../../components/FormDemo';
import Motion from '../../components/Motion';

export default function RequestDemo() {
  return (
    <section className={styles.section} id="section-requestDemo">
      <Container>
        <Motion animation="fadeIn">
          <FormDemo />
        </Motion>
      </Container>
    </section>
  );
}
