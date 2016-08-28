import React, { Component } from 'react';

export default class Articles extends Component {
  render() {
    let template;
    if (this.props.params.article) {
      template = (
        <div>
          <h3>{this.props.params.article.id}</h3>
          {console.log(this.props.params.article.id)}
        </div>
      )
    } else {
      template = (
        <div>
          <h3>{this.props.params.article}</h3>
          <div>Здесь будет список релизов</div>
        </div>
      );
    }

    return template;
  }
}
