import styles from './NewsItem.module.scss';

import formatDate from '../formatDate';

const NewsItem = ({ items }) => {
  const element = items.map(({ _id, title, text, imgUrl, date, url, id }) => (
    <li key={_id} className={styles.listItem}>
      <div className={styles.line}></div>
      <div className={styles.wrapper}>
        <div className={styles.thumb}>
          <div
            className={styles.img}
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${imgUrl})`,
            }}
          ></div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.titleNews} title={title}>
            {title}
          </h2>
          <p className={styles.itemText}>{text}</p>
          <div className={styles.itemFooter}>
            <span className={styles.itemDate}>{formatDate(date)}</span>
            <a
              href={url}
              target="_blank"
              className={styles.linkReadMore}
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </li>
  ));
  return (
    <div className="wrapper">
      <ul className={styles.listNews}>{element}</ul>
    </div>
  );
};

export default NewsItem;
