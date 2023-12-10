import IngredientCard from "../ingredient-card/ingredient-card";
import styles from './ingredient-categoty.module.css';
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types";

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

IngredientCategory.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
    categoryName: PropTypes.string.isRequired
};