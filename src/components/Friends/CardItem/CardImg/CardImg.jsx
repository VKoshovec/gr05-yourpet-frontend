import styles from './CardImg.module.scss';

import noImage from '../../no-image-min.png';

const CardImg = ({ imageUrl, title }) => {
  const image = imageUrl ? imageUrl : noImage;
  return (
    <div className={styles.thumb}>
      <img src={image} alt={title} />
    </div>
  );
};

export default CardImg;
