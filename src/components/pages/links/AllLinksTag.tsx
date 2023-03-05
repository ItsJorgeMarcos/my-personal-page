import { FC } from 'react';
import styles from './AllLinksTag.module.css';

const AllLinksTag: FC = () => {
  return (
    <p className={styles.tag}>
      <span className={styles.leftArr}></span>
      Todos los links de interes
      <span className={styles.rightArr}></span>
    </p>
  );
};

export default AllLinksTag;
