import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import PersonCard from '../PersonCard';
import styles from './Person.module.scss';

export default function PersonList({ cards }) {
  const control = useAnimation();
  const variants = {
    list: {
      hidden: { opacity: 0 },
      visible: () => ({
        opacity: 1,
        transition: {
          staggerChildren: 0.4,
          type: 'spring',
          bounce: 0.4,
          delay: 0.3
        }
      })
    },
    item: {
      hidden: { opacity: 0, y: '20px' },
      visible: () => ({
        opacity: 1,
        y: 0
      })
    }
  };
  const [ref, inView] = useInView({
    threshold: 0.05
  });

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  return (
    <motion.ul
      ref={ref}
      initial="hidden"
      animate={control}
      className={styles.list}
      variants={variants.list}
    >
      {cards.map((card) => {
        return (
          <motion.li
            variants={variants.item}
            className={styles.listItem}
            key={card.name}
          >
            <PersonCard {...card} />
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

{
  /* <ul className={styles.list}>
      {cards.map((card) => {
        return (
          <li className={styles.listItem} key={card.name}>
            <PersonCard {...card} />
          </li>
        );
      })}
    </ul> */
}
