# 🧐 What's this?

## 1️⃣ Boilerplate code

This repository contains boilerplate code for everyone who wants to create a **multi-static-page website** powered by all the modern and fancy tools such as:

* [React](https://reactjs.org) - a JavaScript library for building user interfaces
* [Redux](https://redux.js.org) - a predictable state container for JavaScript apps
* [React Router](https://reacttraining.com/react-router) - a collection of navigational components
* [**Loco-JS-Model**](https://github.com/locoframework/loco-js-model) - a missing model layer for modern JavaScript. Give it a try - it's a beautiful solution for handling RESTful resources
* [Babel](https://babeljs.io) - a JavaScript compiler
* [Webpack](https://webpack.js.org) with plugins - a module bundler
* [PostCSS](https://github.com/postcss/postcss) and [Sass](https://sass-lang.com) - add a bit of style to your website
* [Jest](https://facebook.github.io/jest) - delightful JavaScript testing
* Linters + [Prettier](https://prettier.io)

For the full list of dependencies look into the [package.json](https://github.com/artofcodelabs/front-end-boilerplate/blob/master/package.json)

👍 It may be a good choice for everyone who thinks that [Create React App](https://github.com/facebook/create-react-app) is too complicated and who is looking for a more straightforward, preconfigured solution to experiment with all the mentioned above tools.

## 2️⃣ Example app

This repository also contains an exemplary app showcasing how to use all the libraries and correctly structure your code.

It was created by examining _Webpack's_ guides, docs and two excellent Dan Abramov's [courses](https://egghead.io/redux) describing Redux apps.

If you look at [package.json](https://github.com/artofcodelabs/front-end-boilerplate/blob/master/package.json) once more - it has two `npm` scripts dedicated for development and production build.
For this exemplary app, the production build is not a production-ready version of the app, though. When you open a static file from the `public` directory in the browser, the whole app lacks some functionalities. It requires proper deployment with app server running on specified port and routing.
However, _Webpack's_ production config is correct and you can use this `npm build` script when you decide to build your custom website.

# 🎮 Usage

Delete example app to have a fresh start:

```bash
npm run clear
```

Start developing your own website:

```bash
npm run start
```

Run tests:

```bash
npm run test
```

Cut a production build:

```bash
npm run build
```

# 📜 License

[MIT License](https://opensource.org/licenses/MIT)

# 👨‍🏭 Author

Zbigniew Humeniuk from [Art of Code](http://artofcode.co)