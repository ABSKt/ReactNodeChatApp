import React, { Component } from 'react';
import classes from './chat.module.css'
import MyRooms from './chat/MyRooms'
import MyChat from './chat/MyChat'

class chat extends Component {
    state = {
        roomName: ''
    }

    render() {
        return (
            <div className = {classes.Screen}>
                <div className={classes.LeftContainer}>
                    <MyRooms />
                </div>
                <div className={classes.RightContainer}>
                    <MyChat room = {this.state.roomName} />
                </div>
            </div>
        );
    }
}

export default chat;