#!/bin/bash

npm i;
cd public/;
ln -sf ../dist/index.js .;
ln -sf ../dist/assets/ .;
npm run build;
