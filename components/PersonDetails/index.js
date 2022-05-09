import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../Button';
import styles from './Person.module.scss';

export default function PersonDetails({ img, name, position, fullInfo }) {
  const router = useRouter();

  const clickHandler = (e) => {
    e.preventDefault();

    router.back();
  };

  return (
    <div className={styles.frame}>
      <div className={styles.img}>
        <Image loading="eager" {...img} layout="responsive" />
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.position}>{position}</p>
        <p>{fullInfo}</p>
        <p>
          <Button onClick={clickHandler} variant="link-back">
            back to team
          </Button>
        </p>
      </div>
    </div>
  );
}
