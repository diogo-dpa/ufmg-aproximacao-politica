
import { GetStaticProps, GetStaticPaths } from "next";
import styles from "../../styles/pages/Representantes.module.css";
import MenuMobile from "../../components/MenuMobile";
import { RepresentanteProps } from '../../interfaces/representantes';
import { representanteData } from '../../utils/representantesData';

const Representante = ({
  imgUrlPessoa,
  imgUrlPartido,
  nome,
  role,
  estado,
  descricao,
  gastos
}: RepresentanteProps) => {
  return (
    <div className={styles.fullPage}>
      <MenuMobile />
      <div className={styles.pessoaContainer}>
        <div className={styles.infoPartido}>
          <img className={styles.imgPessoa} src={imgUrlPessoa} alt={nome} />
          <img className={styles.imgPartido} src={imgUrlPartido} alt={nome} />

          <strong className={styles.nomePessoa}>{nome}</strong>

          <span className={styles.roleAndState}>
            {role} {estado}
          </span>
          <p className={styles.descricaoPartido}>{descricao}</p>
        </div>
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
  );
};

export default Representante;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const nome = params?.nome;
    const item = representanteData.find(
      (data) => data.nome.replace(" ", "") === nome,
      );
      // By returning { props: item }, the StaticPropsDetail component
      // will receive `item` as a prop at build time
      return { props: { ...item } };
    } catch (err) {
      return { props: { errors: err.message } };
    }
  };

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = representanteData.map((representante) => ({
    params: { nome: representante.nome.replace(" ", "") },
  }));

  console.log('aaa', paths)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

