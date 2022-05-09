import styles from './Person.module.scss';

import Container from '../../components/Container';
import PersonList from '../../components/PersonList';

export default function PersonSection({ children }) {
  return (
    <section className={styles.section}>
      <Container>{children}</Container>
    </section>
  );
}
