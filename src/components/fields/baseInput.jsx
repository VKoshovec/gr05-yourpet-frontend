import { nanoid } from 'nanoid';

import css from './baseinput.module.scss';

export default function BaseInput({ name, type, placeholder = 'text' }) {
  const id = nanoid();
  return (
    <>
      <input
        id={id}
        className={css.authInput}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
}
