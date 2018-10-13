import React from 'react';

import DataApi from '../components/DataApi';
import { data } from '../testData/testData';
import ArticleList from '../components/ArticleList';

const api = new DataApi(data);

class App extends React.Component {

    constructor() {
      super();
      this.state = {
        articles: api.getArticles(),
        authors: api.getAuthors() 
      };
    }
    render() {
        return(
          <ArticleList 
          articles={this.state.articles}
          authors={this.state.authors}/>
        );
      }
    }
    
    export default App;

