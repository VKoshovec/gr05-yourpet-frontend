import styles from './Time.item.module.scss';

import Li from '../LiItem/LiItem';
import Paragraph from '../Paragraph/Paragraph';

const TimeItem = ({ text, workDays }) => {
  const time = workDays
    .map(item => item)
    .filter(item => item.isOpen)
    .find(item => item.isOpen === true);

  return (
    <>
      <Li className={styles.infoItem}>
        <p>{text}:</p>
        <Paragraph className={styles.infoDesc}>
          {time?.from && time?.to ? `${time.from}-${time.to}` : 'day and night'}
        </Paragraph>
      </Li>
    </>
  );
};
export default TimeItem;
