import styles from "../styles/components/PoliticalPartyData.module.css";

interface PoliticalPartyDataProps {
  currentNumber: number;
  totalNumber: number;
  label: string;
}

const PoliticalPartyData = ({
  currentNumber,
  totalNumber,
  label,
}: PoliticalPartyDataProps) => {
  return (
    <div className={styles.partidoDataContainer}>
      <div className={styles.numbersSection}>
        <strong className={styles.currentNumber}>{currentNumber} </strong>
        <span className={styles.totalNumber}>/{totalNumber}</span>
      </div>
      <span className={styles.statusData}>{label}</span>
    </div>
  );
};

export default PoliticalPartyData;
