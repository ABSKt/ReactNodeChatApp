import React, { Component } from 'react';
import classes from './myrooms.module.css'
import Button from '../button/Button'
import getAllRooms from '../../servercall/getAllRooms'
import createRoom from '../../servercall/createRoom'
import { withRouter, Link } from 'react-router-dom'
import Modal from '../Modal/Modal'
import styles from './linkdecoration.module.css'
class MyRooms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: [],
            modal: false
        }

    }
    handleSuccess = (response) => {
        const rooms = response.map((res) => (
            {roomName: res.roomName,roomId: res._id}
        ))
        this.setState({
            name: rooms
        })
    }
    handleFailure = (e) => {
        console.log(e)
    }
    showModal = () => {
        this.setState({
            'modal': true
        })
    }
    componentDidMount() {
        getAllRooms(this.props.match.params.id, this.handleSuccess, this.handleFailure)
    }
    closeModal = () => {
        this.setState({
            'modal': false
        })
    }
    handleRooms = (res) => {
        const room = res.roomName
        const roomId = res._id
        let newArray = this.state.name.concat({roomName: room, roomId: roomId})
        this.setState({
            name: newArray
        })
    }
    createRoom = (roomName, roomPassword) => {
        createRoom(roomName, roomPassword, this.handleRooms, this.handleFailure)
        this.closeModal()
    }
    render() {
        let modal = null
        if (this.state.modal) {
            modal = (<Modal cancel={this.closeModal} status={this.state.modal} proceed={this.createRoom} />)
        }
        console.log(this.state)
        const rooms = this.state.name.map(({roomName, roomId}) => { 
            console.log(roomName)
            return (  
            <Button key={roomId}>
                    <Link to={{
                        pathname: '/room/'+roomName,
                        search: '?roomId=' + roomId
                    }} className={styles.Link}>{ roomName }</Link>
            </Button>
        )
        })
        return (
            <div>
                {modal}
                <h1 className={classes.Add}>
                    <span class="glyphicon glyphicon-plus" onClick={this.showModal}></span>
                </h1>
                {rooms}
            </div>
        );
    }
}

export default withRouter(MyRooms)