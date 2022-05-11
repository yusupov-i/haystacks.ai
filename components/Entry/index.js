import Motion from '../Motion';
import styles from './Entry.module.scss';

export default function Entry({ title, content }) {
  return (
    <div>
      {title && (
        <Motion delayIndex={0.25} threshold={0}>
          <h1 className={styles.title}>{title}</h1>
        </Motion>
      )}
      {content && (
        <Motion animation="fadeIn" delayIndex={0.5} threshold={0}>
          <div className={styles.content}>{content}</div>
        </Motion>
      )}
    </div>
  );
}
