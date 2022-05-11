import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../Button';
import Motion from '../Motion';
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
        <Motion animation="fadeIn" delayIndex={0.25}>
          <div className={styles.imgFrame}>
            <Image loading="eager" {...img} layout="responsive" />
          </div>
        </Motion>
      </div>
      <div className={styles.info}>
        <Motion animation="fadeInDown" delayIndex={0.5}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.position}>{position}</p>
          <p>{fullInfo}</p>
          <p>
            <Button onClick={clickHandler} variant="link-back">
              back to team
            </Button>
          </p>
        </Motion>
      </div>
    </div>
  );
}
