import React from 'react'

const Book = (props) => {
    const {title, image, author, alt , children, getBook, id, indice } = props;
    return <article className="book">
        
         <h2>#{indice}</h2>
         <button onClick={()=>getBook(id)} >TITLE FINDER</button> 
        <img src={image} alt ={alt} />
        <h2>{title}</h2>
        <h2 style={{fontWeight: 'bolder', color:'blue'}}>{author}</h2>
        {children}
    </article>
}

export default Book;