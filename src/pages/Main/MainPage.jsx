import styles from './MainPage.module.css'
import bigDog from '../../components/assets/images/mainPageImage/big-dog.png'
import smallDog from '../../components/assets/images/mainPageImage/small-dog.png'
import cat from '../../components/assets/images/mainPageImage/cat.png'


const MainPage = () => {
  return (<div className={styles.mainBox}>
  <h1 className={styles.title}>Take good care of your small pets</h1>
  <div className={styles.container}>
    <div className={styles.triangle1}></div>
    <div className={styles.triangle2}></div>
    <div className={styles.triangle3}></div>
  </div>
  </div>);
};
export default MainPage;
