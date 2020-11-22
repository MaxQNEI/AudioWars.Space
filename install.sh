#!/bin/bash

npm i;
cd public/;
ln -sf ../dist/index.js .;
ln -sf ../dist/assets/ .;
cd ../src/assets;
ln -sf ../../node_modules/three/examples/jsm/loaders/ ThreeLoaders;
cd ..;
npm run build;
