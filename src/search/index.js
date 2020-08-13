'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import largeNumber from 'large-number';

class Search extends React.Component {

  constructor() {
    super(...arguments);

    this.state = {
      Text: null
    };
  }

    loadCompent () {
      // 动态引入 import
      import('./text.js').then(Text => {
        this.setState({
          Text
        })
      });
    }

    render() {
      const { Text } = this.state;
      const addResult = largeNumber('999', '1');
      return (
        <div>
          { Text ? <Text /> : null }
          { addResult }
          搜索文字的内容 <di onClick={this.loadCompent.bind(this)}></di>
        </div>
      );
    }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
);