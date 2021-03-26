import Link from "next/link";
import styles from "../styles/components/RepresentativePersonCard.module.css";

interface RepresentativePersonCardProps {
  imgUrl: string;
  personName: string;
  role: string;
  state: string;
  linkToRedirect: string;
}

const RepresentativePersonCard = ({
  imgUrl,
  personName,
  role,
  state,
  linkToRedirect,
}: RepresentativePersonCardProps) => {
  return (
    <Link href={`/${linkToRedirect}`}>
      <a>
        <div className={styles.representativePersonCardComponent}>
          <img className={styles.personImg} src={`${imgUrl}`} alt="Pessoa" />
          <div className={styles.infoPerson}>
            <span className={styles.personName}>{personName}</span>
            <span className={styles.personRole}>
              {role} {state}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default RepresentativePersonCard;
