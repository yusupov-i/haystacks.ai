import Link from 'next/link';
import Container from '../Container';
import styles from './Banner.module.scss';

export default function Banner({ text, href, outer = false }) {
  return (
    <div className={styles.Banner}>
      <Container>
        {href ? (
          <Link href={href} passHref>
            <a target={outer ? '_blank' : '_self'}>{text}</a>
          </Link>
        ) : (
          <span>{text}</span>
        )}
      </Container>
    </div>
  );
}
