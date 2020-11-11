import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initBlogs } from './reducers/blogReducer'
import { setCurrentUser } from './reducers/userReducer'
import Blogposts from './components/Blogposts'
import { Container, ThemeProvider } from '@material-ui/core'
import theme from './styles/theme'

const App = () => {
    // const state = useSelector((state) => state)
    const dispatch = useDispatch()
    // console.log(state, ' => state in <App/> at render')

    const checkIfUserIsLoggedIn = () => {
        const user = JSON.parse(window.localStorage.getItem('loggedInBlogListUser'))
        console.log(user)
        if (user) {
            dispatch(setCurrentUser(user))
        }
    }

    useEffect(checkIfUserIsLoggedIn, [])
    useEffect(() => {
        dispatch(initBlogs())
    }, [dispatch])

    return (
        <Container>
            <div className="container">
                <ThemeProvider theme={theme}>
                    <Blogposts />
                </ThemeProvider>
            </div>
        </Container>
    )
}

export default App
