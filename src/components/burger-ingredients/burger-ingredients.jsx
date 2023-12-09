import {useMemo} from "react"
import IngredientTabs from "../ingredient-tabs/ingredient-tabs";
import PropTypes from "prop-types";
import IngredientCategory from "../ingredient-categoty/ingredient-categoty";
import styles from "./burger-ingredients.module.css";
import {ingredientPropType} from "../../utils/prop-types";

export default function BurgerIngredients({data}) {
    const {buns, sauces, main} = useMemo(
        () => ({
          buns: data.filter(item => item.type === "bun"),
          sauces: data.filter(item => item.type === "sauce"),
          main: data.filter(item => item.type === "main")
        }),
        [data]
    );

    return (
        <section className={styles.section}>
            <h1 className={'text text_type_main-large mt-10 mb-5'}>Соберите бургер</h1>
            <IngredientTabs />
            <ul className={`custom-scroll ${styles.ingredients_list}`}>
                <IngredientCategory ingredients={buns} categoryName={"Булки"}/>
                <IngredientCategory ingredients={sauces} categoryName={"Соусы"}/>
                <IngredientCategory ingredients={main} categoryName={"Начинки"}/>
            </ul>
        </section>
    );
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
};