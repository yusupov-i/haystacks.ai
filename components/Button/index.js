import cn from 'classnames';
import Link from 'next/link';

import styles from './Button.module.scss';

export default function Button({
  variant = 'fill',
  size = null,
  children,
  defaultClassName = cn(styles.Button, styles[`Button_${variant}`]),
  className,
  href = null,
  ...props
}) {
  let cl = cn(
    defaultClassName,
    {
      [styles[`Button_size-${size}`]]: size
    },
    className
  );

  return href ? (
    <Link href={href} {...props} passHref>
      <a className={cl}>{children}</a>
    </Link>
  ) : (
    <button className={cl} {...props}>
      {children}
    </button>
  );
}
