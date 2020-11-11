import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { TextField, Button } from '@material-ui/core'

export default function Blogform({ createBlog }) {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [thought, setThought] = useState('')

    const user = useSelector((state) => state.user)

    const addBlog = async (e) => {
        e.preventDefault()

        if (title !== '' && thought !== '') {
            const newBlog = {
                title,
                thought,
                url: 'na',
            }

            createBlog(newBlog)
            setTitle('')
            setThought('')
        } else {
            dispatch(setNotification('Add a Title and a Thought', true, 7))
        }
    }

    const handleTitleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }

    const handleThoughtChange = (e) => {
        e.preventDefault()
        setThought(e.target.value)
    }

    const formStyles = user ? null : { opacity: '0.6' }

    return (
        <div className="form__container" style={formStyles}>
            <form className="form" onSubmit={addBlog} autoComplete="off">
                {user ? (
                    <TextField
                        className="form__input"
                        placeholder="title"
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                        color="secondary"
                    />
                ) : (
                    <TextField
                        className="form__input"
                        placeholder="title"
                        type="text"
                        name="title"
                        onChange={handleTitleChange}
                        color="secondary"
                        disabled
                    />
                )}
                {user ? (
                    <TextField
                        className="form__input"
                        placeholder="what's your thought"
                        type="text"
                        name="thought"
                        onChange={handleThoughtChange}
                        value={thought}
                        id="filled-multiline-static"
                        multiline
                        rows={5}
                        variant="filled"
                        color="secondary"
                    />
                ) : (
                    <TextField
                        className="form__input"
                        placeholder="what's your thought"
                        type="text"
                        name="thought"
                        onChange={handleThoughtChange}
                        id="filled-multiline-static"
                        multiline
                        rows={5}
                        variant="filled"
                        color="secondary"
                        disabled
                    />
                )}

                {user ? (
                    <Button className="form__btn form__btn--glow form__btn--primary" type="submit">
                        Add Thought...
                    </Button>
                ) : (
                    <Button className="form__btn form__btn--primary" type="submit" disabled>
                        Add Thought...
                    </Button>
                )}
            </form>
        </div>
    )
}
