import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionCreators from 'actions/actionCreators';
import Root from 'components/page1/Root';

const mapStateToProps = (state) => (
  { articles: state.articles
  }
);

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actionCreators, dispatch)
);

const App = connect(mapStateToProps, mapDispatchToProps)(Root);

export default App;