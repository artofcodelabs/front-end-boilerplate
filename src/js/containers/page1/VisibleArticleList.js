import { connect } from "react-redux";

import { anyArticles, getErrorMsg } from "reducers/page1";
import { getVisibleArticles } from "selectors/articles";
import ArticleList from "components/page1/ArticleList";

const mapStateToProps = (state) => ({
  articles: getVisibleArticles(state),
  showLink: !anyArticles(state),
  errorMsg: getErrorMsg(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMarkAsReadClick(id) {
    dispatch({
      type: "MARK_AS_READ",
      id,
    });
  },
});

const VisibleArticleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);

export default VisibleArticleList;
