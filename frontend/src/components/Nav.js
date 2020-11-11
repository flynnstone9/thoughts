import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCurrentUser } from '../reducers/userReducer'
import { setNotification } from '../reducers/notificationReducer'
import { NavLink } from 'react-router-dom'
import { useModal } from '../hooks/index'

import { Button } from '@material-ui/core'
import '../styles/nav.scss'

import Loginform from './Loginform'
import Signupform from './Signupform'
import Notification from './Notification'

const Nav = () => {
    const signInModal = useModal()
    const signUpModal = useModal()
    const dispatch = useDispatch()
    const { notifications, user } = useSelector((state) => state)

    const logoutUser = () => {
        window.localStorage.removeItem('loggedInBlogListUser')
        dispatch(removeCurrentUser())
        dispatch(setNotification('You have logged out', false, 7))
    }

    const defaultNotification = () => {
        return user ? <p></p> : <div className="nav__loginstatus nav__notification">// sign in to add thoughts</div>
    }

    return (
        <>
            <div className="nav">
                <div className="nav__left">
                    <NavLink activeClassName="nav__link--active" className="nav__item nav__link" to="/thoughts">
                        Thoughts
                    </NavLink>
                    <NavLink activeClassName="nav__link--active" className="nav__item nav__link" to="/users">
                        Users
                    </NavLink>
                </div>

                <div className="nav__right">
                    {user ? (
                        <Button
                            className="nav__btn nav__item nav__btn--secondary nav__btn--logout"
                            onClick={logoutUser}
                        >
                            log out
                        </Button>
                    ) : (
                        <div>
                            <Button className="nav__btn nav__btn--primary" onClick={signInModal.flipModalState}>
                                Sign In
                            </Button>
                            <Loginform
                                flipModalState={signInModal.flipModalState}
                                isSignInModalOpen={signInModal.open}
                            />
                            <Button className="nav__btn nav__btn--secondary" onClick={signUpModal.flipModalState}>
                                Create Account
                            </Button>
                            <Signupform
                                flipModalState={signUpModal.flipModalState}
                                isSignUpModalOpen={signUpModal.open}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="nav__info">
                {notifications === null ? defaultNotification() : <Notification />}
                <p className="nav__loginstatus">
                    Logged In As <span className="nav__user">{user ? user.username : 'Guest'}</span>
                </p>
            </div>
        </>
    )
}

export default Nav
