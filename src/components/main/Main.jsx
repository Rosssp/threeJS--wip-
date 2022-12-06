import React from "react";

import styles from "./main.module.scss";

export default function Main() {
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`main__wrapper ${styles.container}`}>
                <div className={styles.side}>
                    <a>
                        <h1>YA BLYA</h1>
                        <img />
                    </a>
                    <h1>&nbsp;/&nbsp;</h1>
                    <a>
                        <h1>OBOSRALSYA</h1>
                        <img />
                    </a>
                </div>
                <div className={styles.side}>
                    <a>
                        <h1>BLYA</h1>
                        <img />
                    </a>
                    <h1>&nbsp;/&nbsp;</h1>
                    <a>
                        <h1>DERMOM NAXUY</h1>
                        <img />
                    </a>
                </div>
                <div className={styles.side}></div>
            </div>
        </div>
    );
}
