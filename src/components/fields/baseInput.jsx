import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ReactComponent as EyeClosed } from '../assets/images/icon/eye-closed.svg';
import { ReactComponent as EyeOpen } from '../assets/images/icon/eye-open.svg';

import css from './baseinput.module.scss';

export default function BaseInput({
  name,
  type,
  placeholder = 'text',
  isShow,
}) {
  const id = nanoid();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <input
        id={id}
        className={css.authInput}
        type={showPassword ? 'text' : type}
        name={name}
        placeholder={placeholder}
      />

      <button
        className={css.authInputIsShow}
        type="button"
        onClick={handleShowPassword}
      >
        {showPassword ? <EyeClosed /> : <EyeOpen />}
      </button>
    </>
  );
}
