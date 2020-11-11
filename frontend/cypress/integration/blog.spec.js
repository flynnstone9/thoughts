describe('Blog app', function () {
    beforeEach(function () {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        cy.visit('http://localhost:3000')

        //create a new user
        const newUser = {
            username: 'admin',
            password: 'password',
            name: 'Mr. Name Name',
        }

        cy.request('POST', 'http://localhost:3003/api/users', newUser)
    })

    it('Login form is shown', function () {
        cy.get('.login__form')
        cy.contains('login')
    })

    describe('Login', function () {
        it('succeeds with correct credentials', function () {
            cy.get('#login__username').type('admin')
            cy.get('#login__password').type('password')
            cy.get('.login__btn').click()

            cy.contains('blogs')
            cy.contains('add blog')
        })

        it('fails with wrong credentials', function () {
            cy.get('#login__username').type('admin')
            cy.get('#login__password').type('wrongpw')

            cy.get('.login__btn').click()

            cy.get('.notification').should('contain', 'wrong UN and PW').and('have.css', 'color', 'rgb(255, 0, 0)')
        })
    })

    describe('Blog and User Functions', function () {
        const correctLogin = () => {
            cy.get('#login__username').type('admin')
            cy.get('#login__password').type('password')
            cy.get('.login__btn').click()
        }

        const makeBlog = (content) => {
            cy.contains('add blog').click()
            cy.get('input.blogform__input__title').type(content)
            cy.get('input.blogform__input__author').type('bilbo baggins')
            cy.get('input.blogform__input__url').type('https://tandb.com')

            cy.get('.blogform__btn__submit').click()
        }

        it('user can create a blog', function () {
            correctLogin()
            makeBlog('content')
            cy.contains('content bilbo baggins')
        })

        it('user can like a blog', function () {
            correctLogin()
            makeBlog('content')
            makeBlog('content')

            cy.get('.blog__likesNumber').first().should('contain', '0')

            cy.get('.blog').find('.blog__btn--show').click()
            cy.get('.blog__btn--like').first().click()

            cy.get('.blog__likesNumber').first().should('contain', '1')
        })

        it('user who created blog can delete it', () => {
            correctLogin()
            makeBlog('content')

            cy.get('.blog').find('.blog__btn--show').click()

            cy.get('.blog__post').should('exist')

            //need reload for delete btn to show
            cy.visit('http://localhost:3000')
            cy.get('.blog').find('.blog__btn--show').click()
            // makeBlog()

            cy.get('.blog__btn--delete').click()

            cy.get('.blog__post').should('not.exist')
        })

        // it.only('user who did not created blog can not delete it', () => {
        //     correctLogin()
        //     makeBlog('content')

        //     cy.get('.logout__btn').click()

        //     const newUser = {
        //         username: 'admin2',
        //         password: 'password2',
        //         name: 'Sir Admin 2',
        //     }

        //     cy.request('POST', 'http://localhost:3003/api/users', newUser)

        //     cy.get('#login__username').type('admin2')
        //     cy.get('#login__password').type('password2')
        //     cy.get('.login__btn').click()

        //     cy.get('.blog').find('.blog__btn--show').click()
        //     cy.visit('http://localhost:3000')
        //     cy.get('.blog').find('.blog__btn--show').click()
        //     cy.get('.blog__post').should('exist')

        //     cy.get('.blog__btn--delete').should('not.exist')
        // })

        it('blogs are orderd by number of likes', () => {
            correctLogin()
            makeBlog('blog w 1 likes')
            makeBlog('blog w 0 likes')
            makeBlog('blog w 2 likes')

            cy.get('.blog').find('.blog__btn--show').first().click()
            cy.get('.blog__btn--like').first().click()

            cy.get('.blog').find('.blog__btn--show').last().click()
            cy.get('.blog__btn--like').last().click().click()

            cy.visit('http://localhost:3000')
        })
    })
})
