import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import styles from './Motion.module.scss';

const TRANSITION_TYPE = 'spring';
const TRANSITION_DURATION = 0.3;
const FADE_IN_TRANSITION_TYPE = 'easeOut';
const FADE_IN_TRANSITION_DURATION = 0.3;

const animationVariant = {
  fadeInUp: {
    hidden: { opacity: 0, y: '50px' },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: TRANSITION_TYPE,
        bounce: 0.4,
        delay: delay * TRANSITION_DURATION
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
        bounce: 0.4,
        delay: delay * TRANSITION_DURATION
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
        type: FADE_IN_TRANSITION_TYPE,
        delay: delay * FADE_IN_TRANSITION_DURATION
      }
    })
  }
};

export default function Motion({
  animation = 'fadeInUp',
  delayIndex = 0,
  children
}) {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.05
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
