import {connect} from 'react-redux';

import Root from 'components/page1/Root';

const mapStateToProps = state => (
  { articles: state.articles
  }
);

const App = connect(mapStateToProps, null)(Root);

export default App;