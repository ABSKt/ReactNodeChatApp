import React, { Component } from 'react';
import Modals from 'react-modal'
import classes from './Modal.module.css'

Modals.setAppElement('#root')
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Modal extends Component {
    state = {
        roomName: '',
        roomPassword: ''
    }
    render() {
        return (
            <div>
                <Modals isOpen={this.props.status} style={customStyles}>
                    <div>
                        <input
                            type='text'
                            placeholder='Room Name'
                            required
                            className={classes.input}
                            onChange={(event) => this.setState({ roomName: event.target.value })}
                        /> <br />
                        <input
                            type='text'
                            placeholder='Room Password'
                            required
                            className={classes.input}
                            onChange={(event) => this.setState({ roomPassword: event.target.value })}
                        /> <br />
                        <div className = {classes.Button}>
                            <button
                                onClick={(e) => this.handleLogInFormCLick(e)}
                                onClick={() => this.props.proceed(this.state.roomName, this.state.roomPassword)}>Create
                            </button><br />
                            <button
                                onClick={() => this.props.cancel()}
                                style={{ 'background-color': 'red', 'margin-left': '5px' }}>cancel
                            </button><br />
                        </div>
                    </div>
                </Modals>
            </div>
        );
    }
}

export default Modal;