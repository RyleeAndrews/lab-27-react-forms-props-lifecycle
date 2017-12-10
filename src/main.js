'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import SearchForm from '../src/components/searchForm.js';
import SearchList from '../src/components/searchResultList.js';
import '../src/style/main.scss';
class App extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div id="mainComponent">
        <header>
          Reddit Search
        </header>
        <div id="searchFormComponent">
          <SearchForm />
        </div>
      </div>
    );
  }
}
ReactDom.render(<App/>, document.getElementById('root'));
