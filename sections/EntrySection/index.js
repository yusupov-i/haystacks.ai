import styles from './Entry.module.scss';

import Container from '../../components/Container';
import Entry from '../../components/Entry';

export default function EntrySection({ data }) {
  return (
    <section className={styles.section}>
      <Container>
        <Entry {...data} />
      </Container>
    </section>
  );
}
