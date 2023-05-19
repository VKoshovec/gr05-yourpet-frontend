import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ReactComponent as Close } from '../assets/images/icon/cross-bigl.svg';
import css from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, children }) => {
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
    <div className={css.overlay} onClick={onCloseModal}>
      <div className={css.modal_content}>
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

/////// Образец /////////
//
// const Page = () => {
//   const [modalShow, setModalShow] = useState(false);
//   const navigate = useNavigate();
//
//   const toggleModal = () => {
//     setModalShow(!modalShow);
//   };
//
//   const onNavigateBtnClick = () => {
//     navigate('/main');
//   };
//
//   return (
//
//     <div>
//       <button onClick={toggleModal}>Modal</button>
//       {modalShow && (
//         <Modal closeModal={toggleModal}>
//           <h2>Congrats!</h2>
//           <p>Youre registration is success</p>
//           <button onClick={onNavigateBtnClick}>Go to main (profile?)</button>
//         </Modal>
//       )}
//     </div>
//
//   );
// };
