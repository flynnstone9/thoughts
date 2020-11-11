import React from 'react'
import { useSelector } from 'react-redux'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'

export default function Notification() {
    const { message, isError } = useSelector((state) => state.notifications)

    const defaultStyles = {
        color: 'white',
        background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
        textDecoration: 'underlined',
    }

    const errorStyles = {
        color: '#222',
        backgroundColor: 'white',
        textDecoration: 'underlined',
    }

    // isError ? (defaultStyles.color = 'red') : (defaultStyles.color = 'green')

    // console.log(defaultStyles)
    // console.log(isNotiErr)

    return (
        <div className="nav__loginstatus nav__notification" style={isError ? errorStyles : defaultStyles}>
            {isError ? (
                <HighlightOffIcon className="nav__notiIcon" />
            ) : (
                <CheckCircleOutlineIcon className="nav__notiIcon" />
            )}
            {isError ? 'ERROR: ' : ''}
            {message}
        </div>
    )
}
