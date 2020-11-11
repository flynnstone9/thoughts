import React from 'react'
import { useHistory } from 'react-router-dom'
import userService from '../services/users'
import loginService from '../services/login'

import { useField } from '../hooks/index'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { setCurrentUser } from '../reducers/userReducer'

import { TextField, Button, Dialog } from '@material-ui/core'

const Signupform = ({ flipModalState, isSignUpModalOpen }) => {
    const name = useField('name')
    const username = useField('username')
    const password = useField('password')
    const dispatch = useDispatch()
    const history = useHistory()

    const signup = async (e) => {
        e.preventDefault()
        try {
            const newUser = await userService.signUpUser({
                username: username.inputValues.value,
                password: password.inputValues.value,
                name: name.inputValues.value,
            })

            const user = await loginService.loginUser({
                username: username.inputValues.value,
                password: password.inputValues.value,
            })

            window.localStorage.setItem('loggedInBlogListUser', JSON.stringify(user))
            dispatch(setCurrentUser(user))

            dispatch(setNotification(`You have created an account: ${newUser.username}`, false, 4))

            flipModalState()
            history.push('/')
        } catch (err) {
            console.log(err)
            dispatch(setNotification(`Failed Account Creation`, true, 4))
            flipModalState()
        }
    }

    return (
        <Dialog
            open={isSignUpModalOpen}
            onClose={flipModalState}
            aria-labelledby="form-dialog-title-signup"
            className="modal"
        >
            <h2 id="form-dialog-title-signup" className="modal__title">
                Create Account
            </h2>
            <div className="modal__content">
                <form className="signup__form modal__form" onSubmit={signup}>
                    <div>
                        <TextField
                            id="signup__name"
                            className="modal__input"
                            placeholder="Name"
                            type="text"
                            name="name"
                            onChange={name.inputValues.onChange}
                        />
                    </div>
                    <div>
                        <TextField
                            id="signup__username"
                            className="modal__input"
                            placeholder="Username"
                            type="text"
                            name="username"
                            onChange={username.inputValues.onChange}
                        />
                    </div>
                    <div>
                        <TextField
                            id="signup__password"
                            className="modal__input"
                            placeholder="Password"
                            type="text"
                            name="password"
                            onChange={password.inputValues.onChange}
                        />
                    </div>
                    <p className="modal__note">*case sensitive</p>
                    <Button variant="contained" className="modal__btn" type="submit">
                        Sign Up
                    </Button>
                </form>
            </div>
        </Dialog>
    )
}

export default Signupform
