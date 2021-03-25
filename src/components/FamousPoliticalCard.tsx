import Link from 'next/link'
import styles from '../styles/components/FamousPoliticalCard.module.css';

interface FamousPoliticalCardProps{
    imgUrl: string;
    linkToRedirect: string;
}

const FamousPoliticalCard = ({imgUrl, linkToRedirect}: FamousPoliticalCardProps) => {
  return (
    <div className={styles.famousPoliticalComponent}>
        <Link href={`${linkToRedirect}`}>
            <img className={styles.imgPoliticalParties} src={`${imgUrl}`} alt="Partido"/>
        </Link>
    </div>
  );
}

export default FamousPoliticalCard;