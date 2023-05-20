import { useState } from 'react';

import styles from './Time.item.module.scss';

import Li from '../LiItem/LiItem';
import Paragraph from '../Paragraph/Paragraph';

const dayWeeks = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

const TimeItem = ({ text, workDays }) => {
  const [selected, setSelected] = useState(null);
  const time = workDays
    .map(item => item)
    .filter(item => item.isOpen)
    .find(item => item.isOpen === true);

  const click = () => {
    if (!workDays) {
      return;
    }

    setSelected(prevState => !prevState);
  };

  const elements = workDays.map((day, index) => (
    <li key={index} className={styles.popupItem}>
      <span className={styles.popupDay}>{dayWeeks[index]}</span>
      <span className={styles.timePopup}>
        {day.isOpen ? (
          `${time.from}-${time.to}`
        ) : (
          <span className={styles.closed}>Closed</span>
        )}
      </span>
    </li>
  ));

  return (
    <>
      <Li className={styles.infoItem}>
        <div
          onClick={click}
          className={
            workDays.length > 0
              ? `${styles.wrapper} ${styles.wrapperHover}`
              : `${styles.wrapper}`
          }
        >
          <p>{text}:</p>
          <Paragraph className={styles.infoDesc}>
            {time?.from && time?.to
              ? `${time.from}-${time.to}`
              : 'day and night'}
          </Paragraph>
          {selected && workDays.length > 0 && (
            <div className={styles.popup}>
              <ul className={styles.popupList}>{elements}</ul>
            </div>
          )}
        </div>
      </Li>
    </>
  );
};
export default TimeItem;
