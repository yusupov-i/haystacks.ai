import Link from 'next/link';
import Container from '../Container';
import styles from './Banner.module.scss';

export default function Banner({ text, href }) {
  return (
    <div className={styles.Banner}>
      <Container>
        {href ? (
          <Link href={href} passHref>
            <a target="_blank">{text}</a>
          </Link>
        ) : (
          <span>{text}</span>
        )}
      </Container>
    </div>
  );
}
