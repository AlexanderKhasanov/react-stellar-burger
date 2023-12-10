import {useState} from "react"
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components"
import styles from "./ingredient-tabs.module.css"

export default function IngredientTabs() {
    const [current, setCurrent] = useState("buns");

    return (
        <div className={styles.tabs}>
            <Tab value="buns" active={current === "buns"} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="sauces" active={current === "sauces"} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="main" active={current === "main"} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    );
}