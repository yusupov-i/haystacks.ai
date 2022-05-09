import Container from '../../components/Container';
import PersonDetails from '../../components/PersonDetails';
import styles from './Person.module.scss';

export default function PersonDetailsSection({ data }) {
  return (
    <section className={styles.section}>
      <Container>
        <PersonDetails {...data} />
      </Container>
    </section>
  );
}
