import { useEffect, useState } from 'react';
import styles from './ScrollingLogo.module.scss';

export default function ScrollingLogo() {
  const [position, setPosition] = useState(0);
  const SCROLL_MOMENTUM = -0.25;

  const LineElements = () => {
    return (
      <>
        <div className={styles.lineElement}></div>
        {/* <div className={styles.lineElement}></div>
        <div className={styles.lineElement}></div> */}
      </>
    );
  };

  const calculatePosition = (scrollY) => scrollY * SCROLL_MOMENTUM;

  useEffect(() => {
    const scrollY = window.scrollY;

    setPosition(calculatePosition(scrollY));

    const inViewScroll = () => {
      const scrollY = window.scrollY;

      setPosition(calculatePosition(scrollY));
    };

    window.addEventListener('scroll', inViewScroll);

    return () => {
      window.removeEventListener('scroll', inViewScroll);
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <div
        className={styles.line}
        style={{ transform: `translateX(${position}%)` }}
      >
        <LineElements />
      </div>
    </div>
  );
}
