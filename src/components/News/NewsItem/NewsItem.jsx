import styles from './NewsItem.module.scss';

const NewsItem = ({ items }) => {
  const element = items.map(({ _id, title, text, imgUrl, date, url, id }) => (
    <li key={_id} className="itemList">
      <div className="line">
        <div className="thumb">
          <img src={imgUrl} alt={title} width={250} />
        </div>
        <div className="content">
          <h2 className="titleNews">{title}</h2>
          <div className="itemtext">{text}</div>
          <div className="itemFooter">
            <span className="itemDate">{date}</span>
            <a href={url} className="linkReadMore">
              Read More
            </a>
          </div>
        </div>
      </div>
    </li>
  ));
  return (
    <div className="wrapper">
      <ul className="listNews">{element}</ul>
    </div>
  );
};

export default NewsItem;
