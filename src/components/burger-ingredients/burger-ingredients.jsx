import {useMemo} from "react"
import React from "react"
import {  Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientTabs from "../ingredient-tabs/ingredient-tabs";
import IngredientCategory from "../ingredient-categoty/ingredient-categoty";
import styles from "./burger-ingredients.module.css"

export default function BurgetIngredients({data}) {
    const buns = useMemo(
        () => data.filter(item => item.type === "bun"),
        [data]
    )
    const sauces = useMemo(
        () => data.filter(item => item.type === "sauce"),
        [data]
    )
    const main = useMemo(
        () => data.filter(item => item.type === "main"),
        [data]
    )

    return (
        <section className={styles.section}>
            <h1 className={'text text_type_main-large mt-10 mb-5'}>Соберите бургер</h1>
            <IngredientTabs />
            <ul className={`${styles.ingredients_list} custom-scroll`}>
                <IngredientCategory ingredients={buns} categoryName={"Булки"}/>
                <IngredientCategory ingredients={sauces} categoryName={"Соусы"}/>
                <IngredientCategory ingredients={main} categoryName={"Начинки"}/>
            </ul>
        </section>
    );
}