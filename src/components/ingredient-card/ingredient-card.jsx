import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-card.module.css"

export default function IngredientCard({data}) {
    return (
        <li>
            <article className={styles.card}>
                <img
                    src={data.image}
                    alt={`Изображение ингредиента ${data.name}`}
                />
                <div className={`mt-2 mb-2 ${styles.price}`}>
                    <p className={"text text_type_digits-default"}>{data.price}</p>
                    <CurrencyIcon type="primery"/>
                </div>
                <p className={`text text_type_main-default ${styles.name}`}>{data.name}</p>
                <Counter count={42} size="default" extraClass="m-1"/>
            </article>
        </li>
    );
}