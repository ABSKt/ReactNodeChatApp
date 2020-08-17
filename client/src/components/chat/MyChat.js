import React, { Component } from 'react';
import classes from './mychat.module.css'
import { withRouter } from 'react-router-dom'
import io from 'socket.io-client';
 
const socket = io('http://localhost:5000');
class MyChat extends Component {
    state = {
        mychat: [],
        inputText: '',
        roomId: '',
        roomName: ''
    }

    handleSend = () => {
        this.setState((prevState, props) => {
            return {
                mychat: prevState.mychat.concat(this.state.inputText),
                inputText: ''
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.roomName !== this.props.match.params.name) {
            this.setState({
                roomName: this.props.match.params.name,
                mychat: []
            })
        }
    }
    render() {
        let heading = this.props.match.params.name || 'Select A Room'
        let myChat = this.state.mychat.map(chat => (
            <div>{chat}</div>
        ))
        console.log(this.state.roomName)
        return (
            <div>
                <h1 className={classes.Header}>{heading}</h1>
                <div className={classes.Mychat}>
                    {myChat}
                </div>
                <div className={classes.InputDiv}>
                    <input type="text" onChange={(event) => this.setState({ inputText: event.target.value })} className={classes.Input} />
                    <button onClick={this.handleSend} className={classes.Button}>send</button>
                </div>
            </div>
        );
    }
}

export default withRouter(MyChat)