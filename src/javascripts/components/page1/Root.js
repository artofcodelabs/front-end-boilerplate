import React from 'react';
import PropTypes from 'prop-types';

import ArticleModel from 'models/Article';
import Nav from 'components/shared/Nav';
import VisibleArticleList from 'containers/page1/VisibleArticleList';
import Footer from './Footer';

import {square} from 'helpers/math';
import Logo from 'logo.png';

const Root = ({showFooter}) => (
  <div>
    <Nav page='page1' />

    <h2>Assets</h2>
    <p className='with-background with-border'>{`4 squared is ${square(4)}`}</p>
    <p className='with-border'><img src={Logo} alt='logo' /></p>

    <h2>Articles</h2>
    <VisibleArticleList />

    {showFooter ? <Footer /> : ''}
  </div>
);

Root.propTypes = {
  showFooter: PropTypes.bool.isRequired
};

export default Root;