const _ = require('lodash')

let dummy = (blogs) => {
    return 1
}

let totalLikes = (blogs) => {
    let allLikes = blogs.map((blog) => blog.likes)

    return allLikes.reduce((sum, like) => {
        return sum + like
    }, 0)
}

let favoriteBlog = (blogs) => {
    let allLikes = blogs.map((blog) => blog.likes)
    let maxLikesOnBlogPost = Math.max(...allLikes)
    let mostLikeBlogs = blogs.filter((blog) => blog.likes === maxLikesOnBlogPost)
    return mostLikeBlogs
}

let filterArrayByAuthor = (blogs) => {
    let postByAuthors = []

    let authors = [...new Set(blogs.map((blog) => blog.author))]

    authors.forEach((author) => {
        let authorsBlogs = blogs.filter((blog) => blog.author === author)
        postByAuthors.push(authorsBlogs)
    })

    return postByAuthors
}

let mostBlogs = (blogs) => {
    //returns author who wrote the most blogs
    //returns obj
    // {author: name, blogs: # of blogs}
    //if more than one matches return one is fine

    let postByAuthors = filterArrayByAuthor(blogs)

    let numberOfMostBlogsByAuthor = Math.max(...postByAuthors.map((authorsBlogs) => authorsBlogs.length))
    let mostProliticAuthorBlogs = postByAuthors.filter((authors) => authors.length === numberOfMostBlogsByAuthor)

    let mostProliticAuthor = {
        author: mostProliticAuthorBlogs[0][0].author,
        blogs: mostProliticAuthorBlogs[0].length,
    }

    return mostProliticAuthor
}

let mostLikes = (blogs) => {
    //returns author who's blog post have most likes combined
    //returns obj
    // {author: name, likes: total likes}
    //if more than one matches return one is fine
    let authorAndLikes = []
    let postByAuthors = filterArrayByAuthor(blogs)

    postByAuthors.forEach((author) => {
        let likes = author.reduce((sum, author) => sum + author.likes, 0)
        authorAndLikes.push({ author: author[0].author, likes })
    })

    let mostTotalLikes = Math.max(...authorAndLikes.map((author) => author.likes))
    let mostLikedAuthor = authorAndLikes.filter((author) => author.likes === mostTotalLikes)
    return mostLikedAuthor[0]
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes,
}
