'use strict';

import React from 'react';



class SearchForm extends React.Component {
  constructor(props){
    super(props)

    this.searchForm = this.searchForm.bind(this);

    this.state = {
      inputValue: '',
    };
  }

  updateInputValue(event){
    this.setState({
      inputValue: event.target.value,
    })
  }

  render(){
    return (
      <div id="searchForm">
        <form>
          <h4> Choose your reddit board <h4>
          {
            this.props.searchForm.map( (board,i) => {
              <div key={i}>
              <input value={this.state.inputValue} onChange={event => this.updateInputValue(event)}/>
              </div>
            })
          }
        </form>
      </div>
    );
  }
}

export default SearchForm;
