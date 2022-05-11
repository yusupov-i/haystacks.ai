import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import styles from './Motion.module.scss';

const TRANSITION_TYPE = 'spring';
const TRANSITION_DURATION = 1;
const BOUNCE_INDEX = 0.3;

const animationVariant = {
  fadeInUp: {
    hidden: { opacity: 0, y: '50px' },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: TRANSITION_TYPE,
        duration: TRANSITION_DURATION,
        bounce: BOUNCE_INDEX,
        delay: delay
      }
    })
  },
  fadeInDown: {
    hidden: { opacity: 0, y: '-50px' },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: TRANSITION_TYPE,
        duration: TRANSITION_DURATION,
        bounce: BOUNCE_INDEX,
        delay: delay
      }
    })
  },
  fadeIn: {
    hidden: {
      opacity: 0
    },
    visible: (delay) => ({
      opacity: 1,
      transition: {
        type: 'easeOut',
        duration: 0.65,
        delay: delay
      }
    })
  }
};

export default function Motion({
  animation = 'fadeInUp',
  delayIndex = 0,
  threshold = 0.15,
  children
}) {
  const control = useAnimation();

  const [ref, inView] = useInView({
    threshold: threshold
  });

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  return (
    <motion.span
      custom={delayIndex}
      ref={ref}
      initial="hidden"
      animate={control}
      variants={animationVariant[`${animation}`]}
      className={styles.span}
    >
      {children}
    </motion.span>
  );
}
