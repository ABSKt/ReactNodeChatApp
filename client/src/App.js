import React, { Component } from 'react';
import io from 'socket.io-client'
import { Route, Switch, } from 'react-router-dom'

import Auth from './components/auth/Auth'
import MyRooms from './components/chat/MyRooms'
import Chat from './components/Chat'
import Mychat from './components/chat/MyChat'
class App extends Component {
  state = {
    isAuth: false
  }

  handleChange = () => {
    this.setState(
      { isAuth: !this.state.isAuth }
    )
  }
  render() {
    let route = (
      <Switch>
        <Route path='/' exact render={() => (<Auth change={this.handleChange} />)} />
        <Route path='/:any'  render={() => (<Auth change={this.handleChange} />)} />
      </Switch>
    )
    if (this.state.isAuth) {
      route = (
        <Switch>
          <Route path='/myrooms' component={MyRooms} />
          <Route path='/chat/:id' component={Chat} />
          <Route path = '/room/:name' component = {Chat} />
        </Switch>
      )
    }
    return (
      <div>
        {route}
      </div>
    );
  }
}

export default App;











//     const socket = io('http://localhost:5000/')
