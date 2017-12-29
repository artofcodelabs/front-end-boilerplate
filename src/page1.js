import React from 'react';
import {render} from 'react-dom';

import {main} from 'helpers/common.js'
import Root from 'components/page1/Root';

import 'shared/index.css';
import 'page1.sass';

main();

render(<Root />, document.getElementById('root'));