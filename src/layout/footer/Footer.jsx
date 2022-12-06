import React from "react";
import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.container} main__wrapper`}>
                <div>TG</div>
                <div className={styles.line}></div>
                <div>VK</div>
            </div>
        </div>
    );
}
