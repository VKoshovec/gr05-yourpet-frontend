import { useState } from 'react';

import styles from './Time.item.module.scss';

import Li from '../LiItem/LiItem';
import Paragraph from '../Paragraph/Paragraph';

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
    setSelected(false);
    setSelected(prevState => !selected);
  };

  return (
    <>
      <Li onClick={click} className={styles.infoItem}>
        <p>{text}:</p>
        <Paragraph className={styles.infoDesc}>
          {time?.from && time?.to ? `${time.from}-${time.to}` : 'day and night'}
        </Paragraph>
        {selected && workDays.length > 0 && (
          <div className={styles.popup}>
            <ul className={styles.popupList}>
              <li className={styles.popupItem}>
                <span className={styles.popupDay}>MN</span>
                <span className={styles.timePopup}>
                  {`${time.from}`}-{`${time.to}`}
                </span>
              </li>
              <li>ВТ</li>
              <li>СР</li>
              <li>ЧТ</li>
              <li>ПТ</li>
              <li>СБ</li>
              <li>ВС</li>
            </ul>
          </div>
        )}
      </Li>
    </>
  );
};
export default TimeItem;
