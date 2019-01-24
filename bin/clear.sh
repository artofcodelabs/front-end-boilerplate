#!/bin/bash

rm MIT-LICENSE

rm __tests__/js/models/*
rm -r dev/server_responses

rm public/cubing.html
rm public/squaring.html

rm -r src/css/index
rm -r src/css/shared
rm src/css/*
rm src/fonts/*
rm src/images/*
rm -r src/js/actions/page1
rm -r src/js/components/index
rm -r src/js/components/page1
rm -r src/js/components/shared
rm src/js/config/*
rm -r src/js/containers/page1
rm src/js/helpers/*
rm src/js/models/*
rm -r src/js/reducers/page1
rm -r src/js/stores/page1

echo "import 'regenerator-runtime/runtime';" > src/index.js
echo "import 'regenerator-runtime/runtime';" > src/page1.js

cat dev/router.js \
  | awk -v regex="squaring" -v count="9" '$0 ~ regex { skip=count; next } --skip >= 0 { next } 1' \
  | tee dev/router.js

if [ -d ".git" ]; then
  rm -rf .git
fi

echo Cleared!