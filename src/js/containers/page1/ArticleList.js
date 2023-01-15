import { connect } from "react-redux";

import {
  anyArticles,
  getErrorMsg,
  getVisibleArticles,
} from "selectors/articles";
import ArticleListComponent from "components/page1/ArticleList";

const mapStateToProps = (state) => ({
  articles: getVisibleArticles(state),
  showLink: !anyArticles(state),
  errorMsg: getErrorMsg(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMarkAsReadClick(id) {
    dispatch({
      type: "ARTICLE.UPDATE",
      id,
      changes: { read: [false, true] },
    });
  },
});

const ArticleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListComponent);

export default ArticleList;
