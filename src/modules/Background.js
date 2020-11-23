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
    this.Renderer = new THREE.WebGLRenderer({ antialias: true });
    this.BackgroundElement.appendChild(this.Renderer.domElement);

    this.Renderer.outputEncoding = THREE.sRGBEncoding;
    this.Renderer.setSize(this.Width(), this.Height());
    this.Renderer.setClearColor(0, 1);
    this.Renderer.shadowMap.enabled = true;
    this.Renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap


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
    const Camera = this.Camera = new THREE.PerspectiveCamera(45, this.Aspect(), 1, 100000);
    const ZeroPosition = new THREE.Vector3(0, 0, 0);

    Scene.fog = new THREE.Fog(0, 0.1, 5000);
    Scene.Animations = [];

    window.addEventListener('resize', () => {
      Camera.aspect = this.Aspect();
      Camera.updateProjectionMatrix();
    });

    // Light
    // const ALight = new THREE.AmbientLight(null, .1);
    // Scene.add(ALight);


    // Lights
    // const LightDistance = 100;
    // const LightIntensity = 500;

    // const LightBack = new THREE.RectAreaLight('#4fc3f7', LightIntensity);
    // LightBack.position.set(LightDistance, 0, -LightDistance);
    // LightBack.lookAt(ZeroPosition);
    // Scene.add(LightBack);

    // const LightFill = new THREE.RectAreaLight('#ef5350', LightIntensity);
    // LightFill.position.set(-LightDistance, 0, LightDistance);
    // LightFill.lookAt(ZeroPosition);
    // Scene.add(LightFill);

    // const LightKey = new THREE.RectAreaLight('#ffffff', LightIntensity);
    // LightKey.position.set(LightDistance, 0, LightDistance);
    // LightKey.lookAt(ZeroPosition);
    // Scene.add(LightKey);



    // ModelAudioWarsLogotype
    this.GLTFLoader.load('/res/glb/ModelAudioWarsLogo.glb', (gltf) => {
      const MeshLogotype = gltf.scene.children[0];
      MeshLogotype.material = new THREE.MeshStandardMaterial({
        color: '#666666',
        roughness: .1,
        metalness: 0,
      });
      MeshLogotype.castShadow = true;
      MeshLogotype.position.z = ((MeshLogotype.position.z - MeshLogotype.geometry.boundingBox.min.z));
      Scene.add(MeshLogotype);

      // CamDistance++
      const LogotypeDistance = ((-MeshLogotype.geometry.boundingBox.min.x + MeshLogotype.geometry.boundingBox.max.x) * 2);

      // Light
      // const SpotLight = new THREE.SpotLight('#fdb813', 1, null, (Math.PI / 8));
      const SpotLight = new THREE.SpotLight('#999999', 1, null, (Math.PI / 8));

      SpotLight.castShadow = true;
      SpotLight.shadow.mapSize.width = 2048;
      SpotLight.shadow.mapSize.height = 2048;

      SpotLight.shadow.camera.near = 0.1;
      SpotLight.shadow.camera.far = 100000;
      SpotLight.shadow.camera.fov = 30;

      SpotLight.position.set(0, 0, LogotypeDistance);
      SpotLight.lookAt(ZeroPosition);
      Scene.add(SpotLight);


      // Ground
      const MeshGround = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(100, 100, 1, 1),
        new THREE.MeshStandardMaterial({
          color: '#444444',
          roughness: .1,
          metalness: 0,
        })
      );
      MeshGround.receiveShadow = true;
      Scene.add(MeshGround);

      // // Camera
      Scene.Animations.push((timestamp) => {
        Camera.position.set(LogotypeDistance, 0, LogotypeDistance);
        Camera.position.y = (Math.sin(timestamp / 20000) * (LogotypeDistance / 8));
        Camera.position.x = (Math.sin(timestamp / 7500) * (LogotypeDistance / 2));
        Camera.lookAt(MeshLogotype.position);
      });
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
