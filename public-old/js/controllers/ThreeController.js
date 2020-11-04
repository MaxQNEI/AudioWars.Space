'use strict';

function ThreeController(Params) {
  if(!(this instanceof ThreeController)) {
    return new ThreeController(Params);
  }

  // Constants -------------------------------------------------------------- //
  var DOMRoot = Params.IndexController.DOMRoot;
  var DOMThreeBackground = DOMRoot.querySelector('.three-background');

  // var GLTFLoader = new THREE.GLTFLoader;

  var CamSets = {
    FoV: 45,
    Near: 0.1,
    Far: Infinity,
  };

  var ZeroPosition = new THREE.Vector3(0, 0, 0);

  // Properties ------------------------------------------------------------- //
  var TimeScale = 1.0;
  var TimeElapsed = 0;

  var Scenarios = {};

  var Scenario;

  // Instance --------------------------------------------------------------- //
  function Instance() {
    return Instance;
  }

  // Consructor ------------------------------------------------------------- //
  return (function() {
    UpdInstance();

    // Test();

    InitRenderer();

    ScenarioIntro();

    return Instance;
  })();

  // Methods ---------------------------------------------------------------- //


  function Test() {
      // const scene = new THREE.Scene();
      // const camera = new THREE.PerspectiveCamera( 75, Width() / Height(), 0.1, 1000 );

      // const renderer = new THREE.WebGLRenderer();
      // renderer.setSize( Width(), Height() );
      // DOMThreeBackground.appendChild( renderer.domElement );

      // const geometry = new THREE.BoxGeometry();
      // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      // const cube = new THREE.Mesh( geometry, material );
      // scene.add( cube );

      // camera.position.z = 5;

      // const animate = function () {
      //   requestAnimationFrame( animate );

      //   cube.rotation.x += 0.01;
      //   cube.rotation.y += 0.01;

      //   renderer.render( scene, camera );
      // };

      // animate();
  }





  function UpdInstance() {
    Object.defineProperties(Instance, {
      UseScenario: { enumerable: true, value: UseScenario },
    });

    return Instance;
  }

  function InitRenderer() {
    if(!DOMThreeBackground) { return; }

    var Renderer = new THREE.WebGLRenderer({ antialias: true });
    var Canvas = Renderer.domElement;

    Renderer.setSize(Width(), Height());
    // Renderer.setClearColor(0);

    DOMThreeBackground.appendChild(Canvas);

    // window.addEventListener('resize', function(event) {
    //   Renderer.setSize(Width(), Height());

    //   Object.values(Scenarios).forEach(function(Scenario) {
    //     if(!Scenario.Camera) { return; }

    //     Scenario.Camera.aspect = Aspect();
    //     Scenario.Camera.updateProjectionMatrix();
    //   });
    // });


    var Prev, Now;
    (function Render(timestamp) {
      Now = Date.now();
      TimeElapsed += ((Now - (Prev = (Prev || (Now - timestamp)))) * TimeScale);
      Prev = Now;

      // (timestamp < 5000) && console.debug('TimeElapsed', TimeElapsed, timestamp);

      if(Scenario) {
        // Scenario.Scene.Animations && Scenario.Scene.Animations.forEach(function(handle) {
        //   handle(TimeElapsed);
        // });

        Renderer.render(Scenario.Scene, Scenario.Camera);
      }

      window.requestAnimationFrame(Render);
    })(document.timeline.currentTime);

    return Instance;
  }

  function ScenarioIntro() {
    var Scenario = (Scenarios.Intro = {});

    var Scene = Scenario.Scene = new THREE.Scene;
    var Camera = Scenario.Camera = new THREE.PerspectiveCamera(CamSets.FoV, Aspect(), CamSets.Near, CamSets.Far);

    var BoxMesh = new THREE.Mesh(
      new THREE.BoxBufferGeometry(10, 10, 10),
      new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
    );

    Camera.position.set(100, 0, 100);
    Camera.lookAt(ZeroPosition);

    Scene.add(BoxMesh);

    SetScenario(Scenarios.Intro);
  }

  function UseScenario(key) {
    if(!Scenarios[key]) {
      return false;
    }

    return SetScenario(Scenarios[key]);
  }

  function SetScenario(scenario) {
    Scenario = scenario;

    return this;
  }

  // Events ----------------------------------------------------------------- //

  // Helpers ---------------------------------------------------------------- //
  function Width(element) {
    element = (element || window);
    return (element.innerWidth || element.offsetWidth);
  }

  function Height(element) {
    element = (element || window);
    return (element.innerHeight || element.offsetHeight);
  }

  function Aspect(element) {
    return (Width(element) / Height(element));
  }
}
