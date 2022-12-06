import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import styles from "./floor.module.scss";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";

const WaveShaderMaterial = shaderMaterial(
    { uTime: 0, uColor: new THREE.Color(0.0, 0.0, 0.0) },

    // vertex shader
    glsl`
    varying vec2 vUv;

    void main() {
        vUv = uv;
    
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,
    //fragmentShader
    glsl`
    precision mediump float;

    uniform vec3 uColor; 
    uniform float uTime;

    varying vec2 vUv;

    void main() {
        gl_FragColor = vec4(sin(vUv.x + uTime) * uColor, 1.0);
    }
    `
);

// gl_FragColor = vec4(vUv.x, .4, 1.0, 1.0);
extend({ WaveShaderMaterial });

const Wave = () => {
    const ref = useRef();
    useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));
    return (
        <mesh>
            <planeGeometry args={[0.4, 0.6, 16, 16]} />
            <waveShaderMaterial uColor={"gray"} ref={ref} wireframe />
        </mesh>
    );
};

const Block = () => {
    return (
        <div className={styles.wrapper}>
            <Canvas camera={{ fov: 10 }}>
                <Suspense fallback={null}>
                    <Wave />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Block;
