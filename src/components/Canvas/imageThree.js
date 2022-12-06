import * as THREE from "three";
import gsap from "gsap";

export default class Canvas {
    constructor({ template }) {
        this.template = template;

        this.createRenderer();
        this.createScene();
        this.createCamera();
        this.createGeometry();

        this.onResize();
    }

    createRenderer() {
        this.renderer = new THREE.WebGL1Renderer({
            alpha: true,
            antialias: true,
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio || 1);
        document.body.appendChild(this.renderer.domElement);
    }

    createScene() {
        this.scene = new THREE.Scene();
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 5;
    }

    createGeometry() {
        this.geometry = new THREE.PlaneGeometry(1, 1, 5, 5);
        this.material = new THREE.MeshNormalMaterial();
        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.plane);
    }

    onResize() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        this.camera.aspect = windowWidth / windowHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(windowWidth, windowHeight);
    }
    update() {
        this.renderer.render(this.scene, this.camera);
    }
}
