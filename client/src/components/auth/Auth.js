import React, { Component } from 'react';
import classes from './Auth.module.css'
import signUp from '../../servercall/signUp'
import logIN from '../../servercall/logIN'
import { Redirect, withRouter } from 'react-router-dom'
import axios from '../../servercall/axios/axios';
class Auth extends Component {
    state = {
        val: 'Log in',
        isSignIn: true,
        name: '',
        email: '',
        password: ''
    }

    handleClick = () => {
        let prevVal = this.state.val
        if(this.state.isSignIn){
            prevVal = 'SIgn up'
        }
        else{
            prevVal = 'Log in'
        }
        this.setState({
            val: prevVal,
            isSignIn: ! this.state.isSignIn
        })
    }
    handleSuccess = (res) => {
        this.props.change()
        axios.defaults.headers.common['Authorization'] = 'Bearer '+ res.token
        console.log(axios.defaults.headers.common['Authorization'])
        this.props.history.push('/chat/'+res.user._id)
    }

    handleFailure = (e) => {
        console.log(e)
    }
    handleSignUpFormClick = (e) => {
        e.preventDefault()
        signUp(this.state.email, this.state.name, this.state.password, this.handleSuccess, this.handleFailure)
    }

    handleLogInFormCLick = (e) => {
        e.preventDefault()
        logIN(this.state.email, this.state.password, this.handleSuccess, this.handleFailure)
    }

    render() {
        let form = (
            <div>
                <form>
                    <input
                        type='email'
                        placeholder='Email'
                        required
                        className={classes.input}
                        onChange={(event) => this.setState({ email: event.target.value })}
                    /> <br />
                    <input
                        type='text'
                        placeholder='Name'
                        required
                        className={classes.input}
                        onChange={(event) => this.setState({ name: event.target.value })}
                    /> <br />
                    <input
                        type='password'
                        placeholder='Password'
                        required className={classes.input}
                        onChange={(event) => this.setState({ password: event.target.value })}
                    /> <br />
                    <button
                        onClick={(e) => this.handleSignUpFormClick(e)}
                        className={classes.Button} >Sign Up
                     </button><br />
                </form>
            </div>
        )

        if (!this.state.isSignIn) {
            form = (
                <div>
                    <input
                        type='email'
                        placeholder='Email'
                        required
                        className={classes.input}
                        onChange={(event) => this.setState({ email: event.target.value })}
                    /> <br />
                    <input
                        type='password'
                        placeholder='Password'
                        required
                        className={classes.input}
                        onChange={(event) => this.setState({ password: event.target.value })}
                    /> <br />
                    <button
                        onClick={(e) => this.handleLogInFormCLick(e)}
                        className={classes.Button} >Log In
                </button><br />
                </div>
            )
        }
        return (
            <div className={classes.screen}>
                <div className={classes.container} >
                    {form}
                </div>
                <p className={classes.paragraph}>
                    Already have account?
                    <span onClick={() => { this.handleClick() }} style={{ color: 'blue' }}>{this.state.val}</span>
                </p>
            </div>
        );
    }
}

export default withRouter(Auth) ;