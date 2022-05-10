import styles from './Entry.module.scss';

export default function Entry({ title, content }) {
  return (
    <div>
      {title && <h1 className={styles.title}>{title}</h1>}
      {content && <>{content}</>}
    </div>
  );
}
