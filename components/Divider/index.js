import cn from 'classnames';
import styles from './Divider.module.scss';

export default function Divider({ direction = 'up' }) {
  return (
    <div className={cn(styles.divider, styles[`divider_${direction}`])}></div>
  );
}
