import Navbar from "../navbar/Navbar.jsx";
import Home from "../../assets/Dashboard/Vector (1).png";
import Seta from "../../assets/Dashboard/Vector.png";
import Lixeira from "../../assets/solicitacao/lixeira.png";
import Motivo from "../../assets/solicitacao/motivo.png";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <div className={styles.layoutDashboard}>
      <Navbar />

      <div className={styles.dashboardMainContainer}>
        <header className={styles.headerDashboard}>
          <img src={Home} alt="Vetor de uma casinha" />
          <img src={Seta} alt="Vetor de uma setinha" />
          <p>Reembolsos</p>
          <img src={Seta} alt="Vetor de uma setinha" />
          <p>Solicitação de Reembolsos</p>
        </header>

        <main className={styles.mainDashboard}>
          <form className={styles.formDashboard}>
            <div className={styles.group1}>
              <div className={styles.inputNome}>
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

              <div className={styles.costType}>
                <label htmlFor="">Tipo de Despesa</label>

                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value=""> Alimentação </option>
                  <option value=""> Combustível</option>
                  <option value=""> Condução</option>
                  <option value=""> Estacionamento</option>
                  <option value=""> Viagem Admin.</option>
                  <option value=""> Viagem Operacional</option>
                  <option value=""> Eventos de representação</option>
                </select>
              </div>

              <div className={styles.costCenter}>
                <label htmlFor="">Centro de Custo</label>

                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
                </select>
              </div>

              <div className={styles.order}>
                <label htmlFor="">Ord. Int.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.divisions}>
                <label htmlFor="">Div.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.pep}>
                <label htmlFor="">PEP</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.currency}>
                <label htmlFor="">Moeda</label>
                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">BRL</option>
                  <option value="">ARS</option>
                  <option value="">USD</option>
                </select>
              </div>

              <div className={styles.distance}>
                <label htmlFor="">Dist / Km</label>
                <input type="text" name="" id="" />
              </div>

              <div className={styles.valueKm}>
                <label htmlFor="">Valor / Km</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.valueIncome}>
                <label htmlFor="">Valor Faturado</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.costs}>
                <label htmlFor="">Despesa</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.buttons}>
                <button>Salvar</button>
                <button className={styles.lastButton}> deletar</button>
              </div>
            </div>
          </form>

          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  {" "}
                  <img src={Lixeira} alt="ícone da lixeira" />{" "}
                </td>
                <td> Maria Vagas Figueira de Souza Santos Silva</td>
                <td> Shell</td>
                <td> 345</td>
                <td> 10/07 </td>
                <td>
                  {" "}
                  <img src={Motivo} alt="ícone do motivo" />
                </td>
                <td>Alimentação</td>
                <td>Fin</td>
                <td>2</td>
                <td>1</td>
                <td>2</td>
                <td>BRL</td>
                <td>20km</td>
                <td>5.00</td>
                <td>20.00</td>
                <td>45.00</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
