import Li from '../LiItem/LiItem';
import Paragraph from '../Paragraph/Paragraph';
import styles from './PhoneItem.module.scss';

const PhoneItem = ({ text, phone }) => {
  return (
    <Li className={styles.infoPhone}>
      <a href={`tel:${phone}`}>
        <div className={phone ? `${styles.wrapper}` : ''}>
          <Paragraph className={styles.textPhone}>{text}</Paragraph>
          {phone ? (
            <Paragraph className={styles.addressLink}>{phone}</Paragraph>
          ) : (
            <Paragraph>website only</Paragraph>
          )}
        </div>
      </a>
    </Li>
  );
};

export default PhoneItem;
