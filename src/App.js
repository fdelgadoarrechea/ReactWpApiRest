import React, { Component } from 'react';
import Superagent from 'superagent';
import Header from './Header';
import Content from './Content';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      titles: [],
      activities : [
        {
          timestamp: new Date().getTime(),
          text: "Ate lunch",
          user: {
            id: 1, name: 'Nate',
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
          },
          comments: [{ from: 'Ari', text: 'Me too!' }]
        },
        {
          timestamp: new Date().getTime(),
          text: "Woke up early for a beautiful run",
          user: {
            id: 2, name: 'Ari',
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
          },
          comments: [{ from: 'Nate', text: 'I am so jealous' }]
        },
      ]
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
        <Header title="Timeline" />
        <Content activities={this.state.activities} />
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
