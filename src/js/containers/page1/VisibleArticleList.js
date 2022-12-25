import { connect } from "react-redux";

import {
  anyArticles,
  getErrorMsg,
  getVisibleArticles,
} from "selectors/articles";
import ArticleList from "components/page1/ArticleList";

const mapStateToProps = (state) => ({
  articles: getVisibleArticles(state),
  showLink: !anyArticles(state),
  errorMsg: getErrorMsg(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMarkAsReadClick(id) {
    dispatch({
      type: "ARTICLES.UPDATE",
      id,
      changes: { read: [false, true] },
    });
  },
});

const VisibleArticleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);

export default VisibleArticleList;
