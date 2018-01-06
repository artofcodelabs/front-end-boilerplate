#!/bin/bash

rm MIT-LICENSE

rm -r dev/server_responses

rm public/cubing.html
rm public/squaring.html

rm -r src/css/index
rm -r src/css/shared
rm src/css/*
rm src/fonts/*
rm src/images/*
rm -r src/javascripts/actions/page1
rm -r src/javascripts/components/index
rm -r src/javascripts/components/page1
rm -r src/javascripts/components/shared
rm src/javascripts/config/*
rm -r src/javascripts/containers/page1
rm src/javascripts/helpers/*
rm src/javascripts/models/*
rm -r src/javascripts/reducers/page1
rm -r src/javascripts/stores/page1

echo "import 'regenerator-runtime/runtime';" > src/index.js
echo "import 'regenerator-runtime/runtime';" > src/page1.js

cat dev/router.js \
  | awk -v regex="squaring" -v count="9" '$0 ~ regex { skip=count; next } --skip >= 0 { next } 1' \
  | tee dev/router.js

echo Cleared!