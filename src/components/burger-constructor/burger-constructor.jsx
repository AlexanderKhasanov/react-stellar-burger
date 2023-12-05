import {useMemo} from "react";
import PropTypes from "prop-types";
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import {ingredientPropType} from "../../utils/prop-types";

export default function BurgerConstructor({data}) {
    const {bun, ingredients } = useMemo(
        () => ({
            bun: data.find(item => item.type === "bun"),
            ingredients: data.filter(item => item.type !== "bun")
        }),
        [data]
    )

    return (
        <section className={`mt-20 ${styles.section_constructor}`}>
            <ul className={`ml-4 ${styles.constructor_container}`}>
                <li className={"pl-8"}>
                    <ConstructorElement 
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image_mobile}
                    />
                </li>
                <div className={`custom-scroll ${styles.change_elements}`}>
                    {
                        ingredients.map(item => (
                            <li key={item._id} className={styles.element}>
                                <DragIcon type="primery"/>
                                <ConstructorElement
                                    text={item.name}
                                    price={item.price}
                                    thumbnail={item.image_mobile}
                                />
                            </li>
                        ))
                    }
                </div>
                <li className={"pl-8"}>
                    <ConstructorElement 
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image_mobile}
                    />
                </li>
                <div className={`mt-5 ${styles.result}`}>
                    <div className={styles.total_price}>
                        <p className={"text text_type_digits-medium"}>610</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <Button htmlType="submit" type="primary" size="large">
                        Оформить заказ
                    </Button>
                </div>
            </ul>
        </section>
    );
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
};