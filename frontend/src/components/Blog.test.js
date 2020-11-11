import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

describe('Blog component', () => {
    let component
    let mockHandler
    beforeEach(() => {
        const blog = {
            title: 'test title',
            author: 'guy 1',
            url: 'https://test.com',
            likes: 100,
            users: {
                name: 'test user',
            },
        }

        const user = {
            name: 'test user',
        }

        mockHandler = jest.fn()

        component = render(<Blog blog={blog} user={user} likeBlog={mockHandler} />)
    })

    test('Blog component renders author and title but not url or likes', () => {
        //title
        //author visible
        const titleAndAuthor = component.getByText('test title guy 1')
        expect(titleAndAuthor).toBeVisible()

        //url
        //likes hiddden
        const url = component.container.querySelector('.blog__url')
        expect(url).not.toBeVisible()
        const likes = component.container.querySelector('.blog__likes')
        expect(likes).not.toBeVisible()
    })

    test('Blog component shows url and likes when show is pressed', () => {
        const url = component.container.querySelector('.blog__url')
        expect(url).not.toBeVisible()
        const likes = component.container.querySelector('.blog__likes')
        expect(likes).not.toBeVisible()

        const button = component.container.querySelector('.blog__btn--show')
        fireEvent.click(button)

        expect(url).toBeVisible()
        expect(likes).toBeVisible()
    })

    test('Like btn clicked twice recieves event', () => {
        const showButton = component.container.querySelector('.blog__btn--show')
        fireEvent.click(showButton)

        const likeButton = component.getByText('like +')
        fireEvent.click(likeButton)
        fireEvent.click(likeButton)

        expect(mockHandler.mock.calls).toHaveLength(2)
    })
})
