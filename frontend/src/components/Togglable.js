import React, { useState, useImperativeHandle } from 'react'
import { Button, Tooltip } from '@material-ui/core'
import { useSelector } from 'react-redux'

const Togglable = React.forwardRef((props, ref) => {
    const [hidden, setHidden] = useState(true)
    const user = useSelector((state) => state.user)

    let showWhenHidden = hidden ? { display: '' } : { display: 'none' }
    let hideWhenHidden = hidden ? { display: 'none' } : { display: '' }

    const flipHidden = () => {
        setHidden(!hidden)
    }

    useImperativeHandle(ref, () => {
        return {
            flipHidden,
        }
    })

    const DisableBtn = () => {
        return (
            <Tooltip title="Sign In To Add Thoughts" arrow>
                <span>
                    <Button onClick={() => flipHidden()} variant="contained" color="primary" disabled>
                        {props.label}
                    </Button>
                </span>
            </Tooltip>
        )
    }

    const ActiveBtn = () => {
        return (
            <span>
                <Button onClick={() => flipHidden()} variant="contained" color="primary">
                    {props.label}
                </Button>
            </span>
        )
    }

    return (
        <div>
            {props.label ? <div style={showWhenHidden}>{user ? <ActiveBtn /> : <DisableBtn />}</div> : null}
            <div style={hideWhenHidden}>
                {props.children}
                {props.label ? <Button onClick={() => flipHidden()}>Cancel</Button> : null}
            </div>
        </div>
    )
})

export default Togglable
