import * as mathFunc from './js/math';

if (process.env.NODE_ENV !== 'production') {
  console.log('Dev mode enabled.');
}

console.log(`3 cubed is ${mathFunc.cube(3)}`);