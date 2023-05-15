import styles from './NotFoundPage.module.scss'
import cat from '../../components/assets/images/notFoundPageImage/cat.png'
import fourImg from '../../components/assets/images/notFoundPageImage/4.png'
import fourImgRight from '../../components/assets/images/notFoundPageImage/4right.png'

import {BigButton} from '../../components/buttons/bigButton/BigButton'
import { Link } from 'react-router-dom';

const NotFoundPage = ()=> {
    return (<>
        <div className={styles.mainBox}>
        <h1 className={styles.title}><span className={styles.oops}>Ooops!</span> This page not found :(</h1>
        <div className={styles.errorBox}>
            <div className={styles.fourBox}><img src={fourImg} alt="4" /></div>
            <div className={styles.catBox}><img src={cat} alt="cat" /></div>
            <div className={styles.fourBox}><img src={fourImgRight} alt="4" /></div>
        </div>
        <Link to="/main">
            <BigButton withImage margin="12px">To main page</BigButton>
        </Link>
      </div>
    </>)
}

export default NotFoundPage;