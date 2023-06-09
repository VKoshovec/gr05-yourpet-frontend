import React, { useState } from 'react';

import styles from './PreviewImage.module.scss';

const PreviewImage = ({ image }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <div className={styles.preview}>
      <img src={preview} alt="preview" className={styles.preview_image} />
    </div>
  );
};
export default PreviewImage;
