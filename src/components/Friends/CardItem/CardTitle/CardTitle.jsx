import styles from './CardTitle.module.scss';

const CardTitle = ({ title, url }) => {
  return (
    <h2 className={styles.title}>
      <a className={styles.link} href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
    </h2>
  );
};

export default CardTitle;
