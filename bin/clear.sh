#!/bin/bash

rm MIT-LICENSE
rm README.md

rm __tests__/js/models/*
rm -r dev/server_responses

rm public/cubing.html
rm public/squaring.html

rm -r src/js/actions/page1
rm src/js/components/index/Calcs.js
rm -r src/js/components/page1
rm -r src/js/components/shared
rm -r src/js/containers/page1
rm src/js/helpers/math.js
rm src/js/models/*
rm -r src/js/reducers/page1
rm -r src/js/stores/page1

if [ -d ".git" ]; then
  rm -rf .git
fi

echo Cleared!