import React from "react";
import styles from "./app-header.module.css"
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import NavigationItem from "../navigation-item/navigation-item"

export default function AppHeader() {
    return (
        <header className={`${styles.header}`}>
            <nav className={styles.navigation}>
                <ul className={`pt-4 pb-4 pl-5 pr-5 ${styles.list}`}>
                    <div className={styles.menu}>
                        <NavigationItem 
                            Icon={BurgerIcon}
                            iconText={'Конструктор'}
                            isActive={true}
                        />   
                        <NavigationItem 
                            Icon={ListIcon}
                            iconText={'Лента заказов'}
                            isActive={false}
                        />
                    </div>
                    <NavigationItem
                        Icon={ProfileIcon}
                        iconText={'Личный кабинет'}
                        isActive={false}
                    />
                </ul>
                <a href="#" className={styles.logo}>
                    <Logo/>
                </a>
            </nav>
        </header>
    )
}