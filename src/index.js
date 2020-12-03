import React from 'react'
import ReactDom from 'react-dom'

import {books} from './books'

import Book from './Book'

import './index.css'

const BookList = () => {
    return (
        <section className='BookList'>
            {
                books.map((book) => {
                    return (
                        <Book key={book.id} {...book} />
                    )
                })
            }
        </section>
    )
}

ReactDom.render(<BookList />, document.getElementById('root'))