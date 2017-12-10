'use strict';

import React from 'react';
import searchFormList from '../../src/components/searchForm.js';
class SearchList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ul>
          {
            this.props.list.map((article,i) =>
              <li key={i}>
                <a href={article.data.url}>
                  <h3>{article.data.title}</h3>
                  <p>Amount of Up Votes: {article.data.ups}</p>
                </a>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default SearchList;
