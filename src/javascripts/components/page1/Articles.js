import React from 'react';
import Article from 'models/Article';
import List from './articles/List';

class Articles extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount(){
    Article.all({resource: 'main'})
    .then((resp) => {
      this.setState({articles: resp.resources});
    })
    .catch((error) => {
      console.log("Failed!", error);
    });
  }

  render(){
    return(
      <div>
        <List articles={this.state.articles} />
      </div>
    )
  }
}

export default Articles;