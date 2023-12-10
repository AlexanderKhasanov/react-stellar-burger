import { useState } from "react";
import styles from "./navigation-item.module.css"
import PropTypes from "prop-types";

export default function NavigationItem({ Icon, iconText, isActive }) {
    const iconType = isActive ? 'primery' : 'secondary';
    const textType = isActive ? null : 'text_color_inactive';

    return (
        <li className={'pl-5 pr-5 pb-4 pt-4'}>
            <a href="#" className={styles.link}>
                <Icon type={iconType} />
                <span className={`text text_type_main-default ${textType}`}>{iconText}</span>
            </a>
        </li>
    )
}

NavigationItem.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    iconText: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
};