import React from "react";

import styles from "./Header.module.scss";

export default function Header() {
    const headerItem = [
        { title: "LOGO", url: "#", type: "link", testid: "main-link" },
        { title: "about", url: "about", type: "link", testid: "main-about" },
        { title: "help", url: "help", type: "link", testid: "help-link" },
    ];

    return (
        <div className={styles.header} style={{ zIndex: 1 }}>
            <div className={styles.header__background}>
                <div
                    className={`main__wrapper ${styles.header__content_wrapper}`}
                >
                    <div>LOGO</div>
                    <ul className={styles.header__menu_nav}>
                        {headerItem.map((item) => (
                            <li className={styles.menu__item}>
                                <a>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.header__theme}> theme </div>
                </div>
            </div>
        </div>
    );
}
