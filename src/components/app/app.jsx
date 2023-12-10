import { useState, useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { data } from "../../utils/data";

function App() {
  const [dataState, setDateState] = useState({
    isLoading: false,
    hasError: false,
    data: []
  })

  useEffect(() => {

  }, [])

  return (
    <div className={`pt-10 pb-10 ${styles.app}`}>
      <AppHeader />
      <main className={`pl-5 pr-5 ${styles.main}`}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </main>
    </div>
  );
}

export default App;
