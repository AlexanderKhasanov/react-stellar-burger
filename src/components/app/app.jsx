import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgetIngredients from "../burger-ingredients/burger-ingredients";
import { data } from "../../utils/data";

function App() {
  return (
    <div className={`pt-10 pb-10 ${styles.app}`}>
      <AppHeader />
      <main className={`pl-5 pr-5 ${styles.main}`}>
        <BurgetIngredients data={data}/>
      </main>
    </div>
  );
}

export default App;
