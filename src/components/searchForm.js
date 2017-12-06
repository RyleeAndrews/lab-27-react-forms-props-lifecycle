'use strict';

import React from 'react';
import superagent from 'superagent';


class SearchForm extends React.Component {
  constructor(props){
    super(props);


    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      searchFormBoard: '',
      searchFormLimit: '',
    };
  }


  onSubmit(event){
    event.preventDefault();
    let redditApi = `http://reddit.com/r/${this.state.searchFormBoard}.json?limit=${this.state.searchFormLimit}`;
    superagent.get(redditApi)
      .then( result => {
        this.setState({searchFormBoard: result});
      });
  }

  render(){
    console.log(this.state);
    return (
      <div id="searchForm">
        <form onSubmit={this.onSubmit}>
          <label> Choose your reddit board </label>
          <input type="text" className="searchFormBoard" defaultValue={'Choose Your Board!'}  onChange={this.updateInputValue}/>

        </form>
      </div>
    );
  }
}
export default SearchForm;
