import React, { useRef } from 'react'
import loginService from '../services/login'

import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../reducers/userReducer'
import { setNotification } from '../reducers/notificationReducer'

import { TextField, Button, Dialog } from '@material-ui/core'

import '../styles/modal.scss'

const Loginform = ({ flipModalState, isSignInModalOpen }) => {
    const dispatch = useDispatch()
    const inputUN = useRef(null)
    const inputPW = useRef(null)

    const login = async (e) => {
        e.preventDefault()
        const un = e.target.username.value
        const pw = e.target.password.value

        try {
            const user = await loginService.loginUser({ username: un, password: pw })

            window.localStorage.setItem('loggedInBlogListUser', JSON.stringify(user))
            dispatch(setCurrentUser(user))
            dispatch(setNotification('You have logged in', false, 7))
            flipModalState()
        } catch (err) {
            dispatch(setNotification('wrong un and pw', true, 7))
            inputUN.current.value = ''
            inputPW.current.value = ''
            flipModalState()
        }
    }

    return (
        <>
            <Dialog
                className="modal"
                open={isSignInModalOpen}
                onClose={flipModalState}
                aria-labelledby="form-dialog-title-signin"
            >
                <h2 className="modal__title" id="form-dialog-title-signin">
                    Sign In
                </h2>
                <div className="modal__content">
                    <form className="modal__form" onSubmit={login}>
                        <TextField
                            id="login__username"
                            className="modal__input"
                            placeholder="username"
                            type="text"
                            name="username"
                            ref={inputUN}
                            color="secondary"
                        />
                        <TextField
                            id="login__password"
                            className="modal__input"
                            placeholder="password"
                            type="text"
                            name="password"
                            ref={inputPW}
                            color="secondary"
                        />
                        <p className="modal__note">*case sensitive</p>
                        <Button variant="contained" className="modal__btn" type="submit">
                            Login
                        </Button>
                    </form>
                </div>
            </Dialog>
        </>
    )
}

export default Loginform
