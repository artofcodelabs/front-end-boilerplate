import { connect } from "react-redux";

import { anyArticles } from "selectors/articles";
import Root from "components/page1/Root";

const mapStateToProps = (state) => ({
  anyArticles: anyArticles(state),
});

const App = connect(mapStateToProps, null)(Root);

export default App;
