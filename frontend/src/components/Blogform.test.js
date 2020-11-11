import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import BlogForm from './Blogform'

describe('BlogForm Testing', () => {
    test('Blogform input is recieved when new blog is created', () => {
        const createBlog = jest.fn()
        const component = render(<BlogForm createBlog={createBlog} />)

        const form = component.container.querySelector('.blogform__form')
        const input = component.container.querySelector('.blogform__input__author')

        // console.log(prettyDOM(input))
        fireEvent.change(input, {
            target: { value: 'author guy' },
        })
        fireEvent.submit(form)

        expect(createBlog.mock.calls).toHaveLength(1)
        expect(createBlog.mock.calls[0][0].author).toBe('author guy')
    })
})
