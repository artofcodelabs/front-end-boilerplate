import {connect} from 'react-redux';

import Root from 'components/page1/Root';

const mapStateToProps = state => ({
  showFooter: state.articles.length > 0
});

const App = connect(
  mapStateToProps,
  null
)(Root);

export default App;