import Li from '../LiItem/LiItem';

import styles from './AddressItem.module.scss';

const AddressItem = ({ text, addressUrl, address }) => {
  return (
    <Li className={styles.infoItem}>
      <a href={addressUrl} target="_blank" rel="noreferrer">
        <div className={addressUrl ? `${styles.wrapper}` : ''}>
          <p>{text}:</p>
          {address ? (
            <p className={styles.addressLink}>{address}</p>
          ) : (
            <p>website only</p>
          )}
        </div>
      </a>
    </Li>
  );
};

export default AddressItem;
