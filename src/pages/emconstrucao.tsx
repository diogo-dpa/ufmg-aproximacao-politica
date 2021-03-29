import MenuMobile from '../components/MenuMobile';
import styles from '../styles/pages/PageInProgress.module.css';

const PageInProgress = () => {
  return (
    <div className={styles.fullPage}>
        <MenuMobile />
        <img className={styles.img} src="/images/inConstruction.png" alt="Em construçãos"/>
        <h1 className={styles.titleInProgress}>Em construção</h1>
        <p className={styles.descriptionInProgress}>Em breve teremos novidades!</p>
    </div>
)
}

export default PageInProgress;
