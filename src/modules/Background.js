import '../styles/background.styl';
import Background from '../views/background.pug';

import * as THREE from 'three';
import { GLTFLoader } from '../assets/ThreeLoaders/GLTFLoader.js';


export default class ModuleBackground {
  BackgroundElement;
  GLTFLoader;

  constructor({ ParentElement }) {
    this.BackgroundElement = HTML2DOM(Background.call(this, {
      // Variables
    }), ParentElement)[0];

    this.GLTFLoader = new GLTFLoader();

    this.Init();
  }

  Init() {
    this.Renderer = new THREE.WebGLRenderer({ antialias: false });
    this.BackgroundElement.appendChild(this.Renderer.domElement);

    this.Renderer.outputEncoding = THREE.sRGBEncoding;
    this.Renderer.setSize(this.Width(), this.Height());
    this.Renderer.setClearColor(0, 1);

    window.addEventListener('resize', () => {
      this.Renderer.setSize(this.Width(), this.Height());
    });

    this.Render = this.Render.bind(this); // as Fix
    window.requestAnimationFrame(this.Render);

    this.Scenario();
  }

  Render(timestamp) {
    window.requestAnimationFrame(this.Render);

    if(!this.Scene || !this.Camera) {
      return;
    }

    this.Scene.Animations && this.Scene.Animations.forEach((animation) => {
      animation(timestamp);
    });

    this.Renderer.domElement.setAttribute('timestamp', timestamp);
    this.Renderer.render(this.Scene, this.Camera);
  }

  Scenario() {
    const Scene = this.Scene = new THREE.Scene();
    const Camera = this.Camera = new THREE.PerspectiveCamera(45, this.Aspect(), 1, 10000);

    Scene.fog = new THREE.Fog(0);
    Scene.Animations = [];

    window.addEventListener('resize', () => {
      Camera.aspect = this.Aspect();
      Camera.updateProjectionMatrix();
    });


    this.GLTFLoader.load('/res/glb/ModelAudioWarsLogo.glb', (gltf) => {
      const MeshAudioWarsLogo = gltf.scene.children[0];
      MeshAudioWarsLogo.material = new THREE.MeshBasicMaterial({ color: '#111111' });

      Scene.add(MeshAudioWarsLogo);
    });


    const ZeroPosition = new THREE.Vector3(0, 0, 0)
    const Distance = 50;
    Scene.Animations.push((timestamp) => {
      Camera.position.set(Distance, 0, Distance);
      Camera.position.x = (Math.sin(timestamp / 10000) * Distance);
      Camera.lookAt(ZeroPosition);
    });
  }

  Width() {
    return window.innerWidth;
  }

  Height() {
    return window.innerHeight;
  }

  Aspect() {
    return (this.Width() / this.Height());
  }
}
