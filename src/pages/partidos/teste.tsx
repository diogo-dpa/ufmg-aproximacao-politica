import { GetStaticProps } from "next";
import styles from "../../styles/pages/Partidos.module.css";

import PoliticalPartyData from "../../components/PoliticalPartyData";
import RepresentativePersonCard from "../../components/RepresentativePersonCard";
import MenuMobile from "../../components/MenuMobile";
import FlagIcon from "@material-ui/icons/Flag";
import { partidoDataSample } from "../../utils/partidosData";

const Partido = ({
  imgUrl,
  nome,
  descricao,
  bandeiras,
  numerosRepresentantes,
  representantes,
}: PartidoProps) => {
  return (
    // <Layout title="Home | Next.js + TypeScript Example">
    <div className={styles.fullPage}>
      <MenuMobile />
      <div className={styles.partidoContainer}>
        <div className={styles.infoPartido}>
          <img className={styles.imgPartido} src={imgUrl} alt={nome} />
          <strong className={styles.nomePartido}>{nome}</strong>

          <p className={styles.descricaoPartido}>{descricao}</p>

          <ul className={styles.bandeirasPart}>
            {bandeiras?.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <FlagIcon />
                <span className={styles.descricaoBandeira}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.partidoContainer}>
        <h2 className={styles.titleRepresentantes}>Representantes</h2>

        <div className={styles.partidoNumber}>
          <PoliticalPartyData
            currentNumber={numerosRepresentantes.prefeitos.atual}
            totalNumber={numerosRepresentantes.prefeitos.total}
            label="Prefeitos"
          />
          <PoliticalPartyData
            currentNumber={numerosRepresentantes.governadores.atual}
            totalNumber={numerosRepresentantes.governadores.total}
            label="Governadores"
          />
          <PoliticalPartyData
            currentNumber={numerosRepresentantes.vereadores.atual}
            totalNumber={numerosRepresentantes.vereadores.total}
            label="Vereadores"
          />
          <PoliticalPartyData
            currentNumber={numerosRepresentantes.depEstaduais.atual}
            totalNumber={numerosRepresentantes.depEstaduais.total}
            label="Dep. Estaduais"
          />
          <PoliticalPartyData
            currentNumber={numerosRepresentantes.depFederais.atual}
            totalNumber={numerosRepresentantes.depFederais.total}
            label="Dep. Federais"
          />
          <PoliticalPartyData
            currentNumber={numerosRepresentantes.senadores.atual}
            totalNumber={numerosRepresentantes.senadores.total}
            label="Senadores"
          />
        </div>
      </div>

      <div className={styles.partidoContainer}>
        {representantes.map((item) => (
          <RepresentativePersonCard
            imgUrl=""
            linkToRedirect=""
            personName={item.nome}
            role={item.role}
            state={item.estado}
          />
        ))}
      </div>
    </div>
    // </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...partidoDataSample[0],
    },
  };
};

export default Partido;
