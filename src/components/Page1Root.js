import React from 'react';
import Nav from './Nav';
import {square} from '../helpers/math';

const Page1Root = () => {
  return (
    <div>
      <Nav />
      <p>{`4 squared is ${square(4)}`}</p>
    </div>
  )
}

export default Page1Root;