#!/bin/bash

rm MIT-LICENSE
rm README.md

rm __tests__/js/e2e/*
rm __tests__/js/models/*
rm -r dev/server_responses

rm -r src/js/actions/page1
rm src/js/components/index/*
rm -r src/js/components/page1
rm -r src/js/components/shared
rm -r src/js/containers/page1
rm src/js/helpers/*
rm src/js/models/*
rm -r src/js/reducers/page1
rm src/js/selectors/*
rm src/js/services/*
rm -r src/js/stores/page1

if [ -d ".git" ]; then
  rm -rf .git
fi

echo Cleared!