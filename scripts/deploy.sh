#!/bin/bash

yarn
yarn build

# if [ "$TRAVIS_BRANCH" = "develop" ]; then
#   firebase use develop
# elif [ "$TRAVIS_BRANCH" = "master" ]; then
#   firebase use default
# fi

echo 'We are here'

firebase projects:list --token $FIREBASE_TOKEN

firebase deploy --token $FIREBASE_TOKEN
