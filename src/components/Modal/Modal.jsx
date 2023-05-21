import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ReactComponent as Close } from '../assets/images/icon/cross-bigl.svg';
import css from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, children, new_owerlay, new_content }) => {
  useEffect(() => {
    document.addEventListener('keydown', onCloseModal);

    return () => document.removeEventListener('keydown', onCloseModal);
  });

  const onCloseModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      closeModal();
    }
  };

  return createPortal(
    <div
      className={[new_owerlay ? `${new_owerlay}` : css.overlay].join(' ')}
      onClick={onCloseModal}
    >
      <div
        className={[new_content ? `${new_content}` : css.modal_content].join(
          ' '
        )}
      >
        <button className={css.modalBtn} onClick={closeModal}>
          <Close />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
