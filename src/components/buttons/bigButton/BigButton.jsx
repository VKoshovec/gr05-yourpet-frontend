import styles from './BigButton.module.scss';
import catPaw from '../../../components/assets/images/icon/pawprint 1.svg'

import { ReactComponent as PawIcon } from '../../assets/images/icon/pawprint 1.svg';


export const BigButton = ({withImage, children, margin}) => {

  return (
    <button className={styles.bigBtn} type="button">
      {children}
      {withImage && <PawIcon style={{ marginLeft: margin }} />}
    </button>
  );
};