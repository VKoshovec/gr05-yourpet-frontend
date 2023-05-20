import Li from '../LiItem/LiItem';
import Paragraph from '../Paragraph/Paragraph';
import styles from './EmailItem.module.scss';

const EmailItem = ({ text, email }) => {
  return (
    <Li className={styles.infoItem}>
      <a href={`mailto:${email}`}>
        <div className={email ? `${styles.wrapper}` : ''}>
          <p>{text}:</p>

          {email ? (
            <Paragraph>{email}</Paragraph>
          ) : (
            <Paragraph>phone only</Paragraph>
          )}
        </div>
      </a>
    </Li>
  );
};

export default EmailItem;
