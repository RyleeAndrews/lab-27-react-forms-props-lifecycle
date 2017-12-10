'use strict';

import React from 'react';
import superagent from 'superagent';
import ApiHandle from '../../lib/apiStorage.js';

class SearchForm extends React.Component {
  constructor(props){
    super(props);

    this.onChangeOfLimit = this.onChangeOfLimit.bind(this);
    this.onChangeOfBoard = this.onChangeOfBoard.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      searchFormBoard: '',
      searchFormLimit: '',
      searchFormList: [],
    };
  }

  onChangeOfLimit(event){
    this.setState({searchFormLimit:event.target.value});
  }
  onChangeOfBoard(event){
    this.setState({searchFormBoard:event.target.value});
  }
  onSubmit(event){
    event.preventDefault();
    let redditApi = `http://reddit.com/r/${this.state.searchFormBoard}.json?limit=${this.state.searchFormLimit}`;
    ApiHandle.fetchData(redditApi)
      .then( result => {
        console.log(redditApi);
        this.setState({searchFormList: result.data.children});
      });
  }

  render(){
    console.log('searchFormList',this.state.searchFormList);
    return (
      <div id="searchForm">
        <form onSubmit={this.onSubmit}>
          <label>
          Pick Your Reddit Board:
            <input type="text" value={this.state.searchFormBoard} onChange={this.onChangeOfBoard}/>
          </label>
          <br/>
          <label>
          Pick your number of displayed results
            <input type="text" value={this.state.searchFormLimit} onChange={this.onChangeOfLimit}/>
          </label>
          <button type="submit">Submit!</button>
        </form>

        <ul>
          {
            this.state.searchFormList.map((article,i) =>
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
export default SearchForm;
