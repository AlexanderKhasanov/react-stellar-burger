import { Fragment } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgetIngredients from "../burger-ingredients/burger-ingredients";
//import { data } from "../../utils/data";

function App() {
  return (
    <Fragment className={styles.app}>
      <AppHeader />
      <main>
        <BurgetIngredients/>
      </main>
    </Fragment>
  );
}

export default App;
