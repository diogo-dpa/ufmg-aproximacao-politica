import { GetStaticProps, GetStaticPaths } from "next";

import { PartidoProps } from "../../interfaces/partidos";
import { partidoDataSample } from "../../utils/partidosData";
import MenuMobile from "../../components/MenuMobile";
import styles from "../../styles/pages/Partidos.module.css";
import FlagIcon from "@material-ui/icons/Flag";

import PoliticalPartyData from "../../components/PoliticalPartyData";
import RepresentativePersonCard from "../../components/RepresentativePersonCard";

const Partidoss = ({
  imgUrl,
  nome,
  descricao,
  bandeiras,
  numerosRepresentantes,
  representantes,
  gastos
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
            imgUrl={item.imgUrl}
            linkToRedirect={item.linkToRedirect}
            personName={item.nome}
            role={item.role}
            state={item.estado}
          />
        ))}
      </div>

      <div className={styles.areaInProgress}>
        <div className={styles.titleArea}>
          <h3 className={styles.titleAreaInProgress}>Gastos</h3>
          <span className={styles.seeDetails}>Ver detalhes</span>
        </div>
        <div className={styles.notEmptyArea}>
          <div className={styles.biggestArea}>
            <span className={styles.biggerNumberData}>
              R$ {gastos.emReais}
            </span>
            <span className={styles.sublabel}>
              GASTOS TOTAIS
            </span>
          </div>

          <div className={styles.percentArea}>
            <span className={styles.smallerNumberData}>
              {gastos.emPorcentagem}%
            </span>
            <span className={styles.sublabel}>
              % DO TODO
            </span>
          </div>

        </div>
      </div>

      <div className={styles.areaInProgress}>
        <h3 className={styles.titleAreaInProgress}>Jurídico</h3>
        <div className={styles.emptyArea}>Em desenvolvimento</div>
      </div>

      <div className={styles.areaInProgress}>
        <h3 className={styles.titleAreaInProgress}>Viagens</h3>
        <div className={styles.emptyArea}>Em desenvolvimento</div>
      </div>
    </div>
    // </Layout>
  );
};

export default Partidoss;


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    console.log("okokok", params);
    const nome = params?.nome;
    const item = partidoDataSample.find(
      (data) => data.nome.toUpperCase() === nome,
      );
      // By returning { props: item }, the StaticPropsDetail component
      // will receive `item` as a prop at build time
      console.log("item", item);
      return { props: { ...item } };
    } catch (err) {
      return { props: { errors: err.message } };
    }
  };

  export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const paths = partidoDataSample.map((partido) => ({
      params: { nome: partido.nome },
    }));
  
    console.log("aqui", paths);
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
  };
