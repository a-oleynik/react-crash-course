import styles from '../App.module.css';
import {getImageUrl} from "../utils";

export default function Avatar({person}) {
  return (
    <img
      className={styles.avatar}
      src={getImageUrl(person.imageId)}
      alt={person.name}
      width={70}
      height={70}
    />
  );
}
