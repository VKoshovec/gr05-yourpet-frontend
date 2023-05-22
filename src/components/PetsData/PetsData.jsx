import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as Trash } from '../assets/images/icon/trash-2.svg';

import { getPets } from 'api/pets';
import { deletePets } from 'api/pets';

import styles from './PetsData.module.scss';

const PetsData = () => {
  const [pets, setPets] = useState([]);

  const location = useLocation();

  const fetchPets = async () => {
    const { data } = await getPets();

    setPets(data);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleDeletePet = id => {
    const fetchDeletePet = async () => {
      try {
        const result = await deletePets(id);
        fetchPets();
      } catch (error) {
        console.log(error);
      }
    };
    fetchDeletePet();
  };

  return (
    <div className={styles.pets}>
      <div className={styles.pets_wrap}>
        <div className={styles.pets_title_wrap}>
          <h2 className={styles.pets_title}>My pets:</h2>
          <NavLink
            to={`/add-pet`}
            className={styles.pets_navBtn}
            state={location.pathname}
          >
            Add Pet +
          </NavLink>
        </div>
        {!pets ? (
          <div></div>
        ) : (
          <>
            {pets.map(({ _id, petsURL, name, birthday, breed, comments }) => {
              return (
                <div key={_id} className={styles.pets_info}>
                  <img
                    src={petsURL}
                    alt="pet_image"
                    className={styles.pets_img}
                  />
                  <ul className={styles.pets_list}>
                    <li className={styles.pets_item}>
                      Name:{' '}
                      <span className={styles.pets_item_span}> {name}</span>
                    </li>
                    <li className={styles.pets_item}>
                      Date of birth:{' '}
                      <span className={styles.pets_item_span}> {birthday}</span>
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
                  <button
                    className={styles.pets_btn}
                    type="button"
                    onClick={() => {
                      handleDeletePet(_id);
                    }}
                  >
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
