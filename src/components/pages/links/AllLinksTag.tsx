import { FC } from 'react';
import styles from './AllLinksTag.module.css';

const AllLinksTag: FC = () => {
  return (
    <p className={styles.tag}>
      <span className={styles.leftArr}></span>
      Todos los links
      <span className={styles.rightArr}></span>
    </p>
  );
};

export default AllLinksTag;
