import classNames from 'classnames';
import styles from './Container.module.scss';

export default function Container({ className, size = 'default', children }) {
  const cl = classNames(className, styles.container, {
    [styles[`container_${size}`]]: size
  });

  return <div className={cl}>{children}</div>;
}
