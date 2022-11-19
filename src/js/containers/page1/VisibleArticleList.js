import { connect } from "react-redux";

import { getVisibleArticles, anyArticles, getErrorMsg } from "reducers/page1";
import { loadArticles } from "actions/page1/articles";
import ArticleList from "components/page1/ArticleList";

const mapStateToProps = (state) => ({
  articles: getVisibleArticles(state),
  showLink: !anyArticles(state),
  errorMsg: getErrorMsg(state),
});

const mapDispatchToProps = (dispatch) => ({
  async onLoadArticlesClick() {
    loadArticles();
  },
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
