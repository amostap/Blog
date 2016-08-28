import React, { Component } from 'react';
import { Link } from 'react-router';
import Content from '../content.json';
import './List.css';

export default class List extends Component {
  render() {
    return (
      <div>
        <ul>
          { Content.Articles.map(article =>
            <div className="preview">
              <li key={article.id}>
                <Link to={`/articles/${article.id}/`}>
                  <h2 className="preview--h2">
                    {article.header}
                  </h2>
                  <img src={article.image} alt="img" />
                </Link>
              </li>
            </div>
          )
          }
        </ul>
      </div>
    );
  }
}
