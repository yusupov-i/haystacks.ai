import PersonCard from '../PersonCard';
import styles from './Person.module.scss';

export default function PersonList({ cards }) {
  return (
    <ul className={styles.list}>
      {cards.map((card) => {
        return (
          <li className={styles.listItem} key={card.name}>
            <PersonCard {...card} />
          </li>
        );
      })}
    </ul>
  );
}
