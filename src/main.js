'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import SearchForm from '../src/components/searchForm.js';


class App extends React.Component {
  constructor(props){
    super(props);

    

    // this.selectBoard = this.selectBoard.bind(this);
  }
  // componentWillMount(searchFormBoard,searchFormLimit){
  //   // const redditApi = `http://reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`;
  //
  //
  //   if(searchFormBoard){
  //     searchFormBoard = JSON.parse(searchFormBoard);
  //     this.setState({searchFormBoard});
  //   }
  //   else{
  //     superagent.get(redditApi)
  //       .then( result => {
          // let search= result.body.results;
          // localStorage.setItem('searchForm', JSON.stringify(searchFormBoard));
          // this.setState({searchFormBoard});
  //       })
  //       .catch(console.log('error'));
  //   }
  // }
  //
  // selectBoard(redditApi){
  //   superagent.get(redditApi)
  //     .then( result => {
  //       let search = result.body;
  //       this.setState({search});
  //     })
  //     .catch(console.log('error'));
  // }
  render(){
    return (
      <div>
        <header>
          Reddit Search
        </header>
        <div id="mainComponent">
          <SearchForm />
        </div>
      </div>
    );
  }
}
ReactDom.render(<App/>, document.getElementById('root'));
