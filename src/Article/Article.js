import React, { Component } from 'react';
import { Link } from 'react-router';
import './Article.css';
import Content from './../content.json';


class Article extends Component {
  render() {
    let a = this.props.params.id;
    return (
      <div className="article">
        <h2 className="article--h2">
          {Content.Articles[a - 1].header}
        </h2>
        <img src={Content.Articles[a - 1].image} alt="img" />
        <p className="content">
          {Content.Articles[a - 1].content}
        </p>
        <p className="author">
          {Content.Articles[a - 1].author}
        </p>
        <p className="date">
          {Content.Articles[a - 1].date}
        </p>
        <Link to="/">back</Link>
      </div>
    );
  }
}

export default Article;
