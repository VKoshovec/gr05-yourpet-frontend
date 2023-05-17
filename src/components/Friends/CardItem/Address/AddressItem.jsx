import Li from '../LiItem/LiItem';
import Paragraph from '../Paragraph/Paragraph';
import styles from './AddressItem.module.scss';

const AddressItem = ({ text, addressUrl, address }) => {
  return (
    <Li className={styles.infoItem}>
      <p>{text}:</p>
      {address ? (
        <Paragraph>
          <a href={addressUrl} target="_blank" rel="noreferrer">
            {address}
          </a>
        </Paragraph>
      ) : (
        <Paragraph>website only</Paragraph>
      )}
    </Li>
  );
};

export default AddressItem;
