import Li from '../LiItem/LiItem';
import Paragraph from '../Paragraph/Paragraph';
import styles from './EmailItem.module.scss';

const EmailItem = ({ text, email }) => {
  return (
    <Li className={styles.infoItem}>
      <p>{text}:</p>

      {email ? (
        <Paragraph>
          <a href={`mailto:${email}`}>{email}</a>
        </Paragraph>
      ) : (
        <Paragraph>phone only</Paragraph>
      )}
    </Li>
  );
};

export default EmailItem;
