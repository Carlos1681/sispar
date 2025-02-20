import Navbar from "../navbar/Navbar.jsx";
import Home from "../../assets/Dashboard/Vector (1).png";
import Seta from "../../assets/Dashboard/Vector.png";
import styles from "./Dahboard.module.scss";

function Dashboard() {
  return (
    <div className={styles.layoutDashboard}>
      <Navbar />

      <div className={styles.mainContainer}>
        <header className={styles.headerDashboard}>
          <img src={Home} alt="Vetor de uma casinha" />
          <img src={Seta} alt="Vetor de uma setinha" />
          <p>Reembolsos</p>
          <img src={Seta} alt="Vetor de uma setinha" />
          <p>Solicitação de Reembolsos</p>
        </header>

        <main className={styles.mainDashboard}>
          <form className={styles.formSolicitacao}>
            <div className={styles.group1}>
              <div className={styles.inputName}>
                <label htmlFor="">Nome Completo</label>
                <input type="text" name="" id="nome-completo" />
              </div>

              <div className={styles.inputCompany}>
                <label htmlFor="">Empresa</label>
                <input type="text" name="" id="empresa" />
              </div>

              <div className={styles.inputPayment}>
                <label htmlFor="">Nº Prest. Contas</label>
                <input type="text" name="" id="prestacao-contas" />
              </div>

              <div className={styles.inputMotive}>
                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                <textarea name="" id="">
                  {" "}
                </textarea>
              </div>
            </div>

            <div className={styles.verticalBar}></div>

            <div className={styles.group2}>
              <div className={styles.inputData}>
                <label htmlFor="">Data</label>
                <input type="date" name="" id="" />
              </div>

              <div className={styles.costs}>
                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value=""> Alimentação </option>
                  <option value=""> Combustível</option>
                </select>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
