import React, { Component } from 'react';
import Superagent from 'superagent';
import logo from './hipertextual-icon-mobile-landscape.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      titles: []
    };
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick(){
    var self = this;
    Superagent('https://hipertextual.com/wp-json/wp/v2/posts').then( response =>{
      var titulos = [];
      response.body.map( post => {
        titulos.push(post.title.rendered);
      });
      self.setState({titles : titulos});
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          <button onClick={this.handleOnclick}>traer posts</button>
        </p>
        <div>
          {this.state.titles.map( titulo => {
            return <p key={titulo}>{titulo}</p>
          })}
        </div>
      </div>
    );
  }
}

export default App;
