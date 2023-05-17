import Li from '../LiItem/LiItem';
import Paragraph from '../Paragraph/Paragraph';
import styles from './PhoneItem.module..scss';

const PhoneItem = ({ text, phone }) => {
  return (
    <Li className={styles.infoItem}>
      <p>{text}:</p>
      {phone ? (
        <Paragraph>
          <a href={`tel:${phone}`}>{phone}</a>
        </Paragraph>
      ) : (
        <Paragraph>email only</Paragraph>
      )}
    </Li>
  );
};

export default PhoneItem;
