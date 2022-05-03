import Container from '../Container';
import styles from './Banner.module.scss';

export default function Banner({ text = null }) {
  return (
    <div className={styles.Banner}>
      <Container>{text}</Container>
    </div>
  );
}
