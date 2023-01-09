import { connect } from "react-redux";

import { anyArticles } from "selectors/articles";
import RootComponent from "components/page1/Root";

const mapStateToProps = (state) => ({
  anyArticles: anyArticles(state),
});

const App = connect(mapStateToProps, null)(RootComponent);

export default App;
