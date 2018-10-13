import React from 'react';
import Article from '../components/Article';

const ArticleList = (props) => {
    return (
        <div>
          {Object.values(props.articles).map(article => 
            <Article
                key={article.id}
                article={article}
                author={props.authors[article.authorId]}           
            />
            )}
        </div>
    );
};

export default ArticleList;