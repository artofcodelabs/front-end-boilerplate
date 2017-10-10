import React from 'react';
import Nav from '../shared/Nav';
import {square} from '../../helpers/math';
import Logo from '../../images/logo.png';

const Page1Root = () => {
  return (
    <div>
      <Nav />
      <p className='with-background'>{`4 squared is ${square(4)}`}</p>
      <p><img src={Logo} alt='logo' /></p>
    </div>
  )
}

export default Page1Root;