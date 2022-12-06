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
    precision mediump float;

    varying vec2 vUv; 
    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

    void main() {
      vUv = uv;

    vec3 pos = position;
      float noiseFreq = .1;
      float noiseAmp = .2;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
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
            <planeGeometry args={[2, 1.0, 16, 16]} />
            <waveShaderMaterial uColor={"gray"} ref={ref} wireframe />
        </mesh>
    );
};

const Scene = () => {
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

export default Scene;
