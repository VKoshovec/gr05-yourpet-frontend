import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Trash } from '../assets/images/icon/trash-2.svg';
import cat from '../assets/images/userPageImage/myPetsCat.png';
import dog from '../assets/images/userPageImage/myPetsDog.png';

import styles from './PetsData.module.scss';

const pets = [
  {
    _id: 11,
    image: cat,
    name: 'Jack',
    dateOfBirth: '22.04.2018',
    breed: 'Persian cat',
    comments:
      'Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.',
  },
  {
    _id: 21,
    image: dog,
    name: 'No Jack',
    dateOfBirth: '22.04.2018',
    breed: 'Basenji',
    comments:
      'Comments: Jack is a handsome Basenji with short, shiny red fur and perky ears.',
  },
  {
    _id: 31,
    image: cat,
    name: 'Jack',
    dateOfBirth: '22.04.2018',
    breed: 'Persian cat',
    comments:
      'Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.',
  },
  {
    _id: 41,
    image: dog,
    name: 'No Jack',
    dateOfBirth: '22.04.2018',
    breed: 'Basenji',
    comments:
      'Comments: Jack is a handsome Basenji with short, shiny red fur and perky ears.',
  },
];

const PetsData = () => {
  // const [state, setState] = useState();

  const navigate = useNavigate();

  const hanleNavigate = () => {
    navigate('/add-pet');
  };

  return (
    <div className={styles.pets}>
      <div className={styles.pets_wrap}>
        <div className={styles.pets_title_wrap}>
          <h2 className={styles.pets_title}>My pets:</h2>
          <button
            type="button"
            className={styles.pets_navBtn}
            onClick={hanleNavigate}
          >
            Add Pet +
          </button>
        </div>
        {!pets ? (
          <div></div>
        ) : (
          <>
            {pets.map(({ _id, image, name, dateOfBirth, breed, comments }) => {
              return (
                <div key={_id} className={styles.pets_info}>
                  <img src={image} alt="cat" className={styles.pets_img} />
                  <ul className={styles.pets_list}>
                    <li className={styles.pets_item}>
                      Name:{' '}
                      <span className={styles.pets_item_span}> {name}</span>
                    </li>
                    <li className={styles.pets_item}>
                      Date of birth:{' '}
                      <span className={styles.pets_item_span}>
                        {' '}
                        {dateOfBirth}
                      </span>
                    </li>
                    <li className={styles.pets_item}>
                      Breed:{' '}
                      <span className={styles.pets_item_span}> {breed}</span>
                    </li>
                    <li className={styles.pets_item}>
                      Comments:{' '}
                      <span className={styles.pets_item_span}>{comments}</span>
                    </li>
                  </ul>
                  <button className={styles.pets_btn} type="button">
                    <Trash />
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default PetsData;
