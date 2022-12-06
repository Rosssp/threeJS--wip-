import { Canvas } from "@react-three/fiber";
import React from "react";
import styles from "./floor.module.scss";

export default function FloorBlock() {
    return (
        <div className={styles.wrapper}>
            <Canvas>
                <mesh></mesh>
            </Canvas>
        </div>
    );
}
