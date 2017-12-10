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
          {
            this.props.list.map((article,i) =>
              <div key={i}>
                <a href={article.data.url}>
                  <h3>{article.data.title}</h3>
                  <p>Amount of Up Votes: {article.data.ups}</p>
                </a>
                </div>
              )
          }
          </div>
    );
  }
}

export default SearchList;
