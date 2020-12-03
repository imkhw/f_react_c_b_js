import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

const BookList = () => {
    return (
        <section className='BookList'>
            <Book />
            <Book />
        </section>
    )
}

const Book = () => {
    return (
        <article className='Book'>
            <img src='https://images-na.ssl-images-amazon.com/images/I/81MVfud0o8L._AC_UL210_SR210,210_.jpg' alt='' />
            <h1>Caste (Oprah's Book Club): The Origins of Our Discontents</h1>
            <h4>Isabel Wilkerson</h4>
        </article>
    )
}

ReactDom.render(<BookList />, document.getElementById('root'))