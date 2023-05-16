import React from 'react';
import { ReactComponent as PawLeftIcon } from '../assets/images/icon/left-paw.svg';
import { ReactComponent as PawRightIcon } from '../assets/images/icon/right-paw.svg';
import styled from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styled.loaderContainer}>
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className={styled.loaderPaw}>
          {i % 2 === 0 ? (
            <PawLeftIcon className={styled.loaderLeftIcom} />
          ) : (
            <PawRightIcon className={styled.loaderRightIcom} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Loader;