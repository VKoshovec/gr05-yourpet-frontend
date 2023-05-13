import css from './MainButton.module.scss';
export const MainButton = props => {
  return (
    <button className={css.main__button} type="submit">
      {props.children}
    </button>
  );
};
