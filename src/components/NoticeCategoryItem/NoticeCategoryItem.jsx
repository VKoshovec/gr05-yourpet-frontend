import css from './NoticeCategoryItem.module.css';

const NoticeCategoryItem = ({category, location, date, sex}) => {
    return (
        <li className={css.item}>
            <div className={css.item}>{category}</div>
            <button className={css.item}>icon</button>
            <img className={css.item} src={avatar} alt="User avatar" width="48" />
            <div className={css.item}>icon
                {location}</div>
            <div className={css.item} >icon
                {date}</div>
            <div className={css.item}>icon
                {sex}</div>
            <h3 className={css.item}>Сute dog looking for a home</h3>
            <button className={css.item}>LearnMore</button>
        </li>
    );
};

export default NoticeCategoryItem;