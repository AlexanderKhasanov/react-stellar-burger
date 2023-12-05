import IngredientCard from "../ingredient-card/ingredient-card";
import styles from './ingredient-categoty.module.css'

export default function IngredientCategory({ingredients, categoryName}) {
    return (
        <li>
            <h2 className={"text text_type_main-medium mt-10 mb-3"}>{categoryName}</h2>
            <ul className={`pl-4 ${styles.ingredient_list}`}>
                {ingredients.map(item => <IngredientCard data={item} key={item._id} />)}
            </ul>
        </li>
    );
}