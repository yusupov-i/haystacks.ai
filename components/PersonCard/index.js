import Image from 'next/image';
import Button from '../Button';
import styles from './Person.module.scss';

export default function PersonCard({ img, name, position }) {
  const id = name.toLowerCase().split(' ').join('-');

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Image loading="eager" {...img} layout="responsive" />
      </div>
      <div className={styles.info}>
        <div className={styles.infoWrap}>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.position}>{position}</p>
        </div>
        <p>
          <Button href={`/about/${id}`} variant="link">
            LEARN MORE
          </Button>
        </p>
      </div>
    </div>
  );
}
