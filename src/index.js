import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import {Books} from './books';
import Book from "./Book";



const BookList = () =>{
    const clicker = (e)=>{
        e.preventDefault();
        alert("clicker")
    }
    const userTyper = (e)=>{
       console.log(e)
    }
    const submitter = (e)=>{
        e.preventDefault();
        console.log(e)
     }

     const getBook =(id)=>{
        const daBook = Books.find((book)=>book.id === id);
        console.log(daBook.title)
       
     }
    return(
        <>
        <h1>AMAZON BEST SELLERS</h1>
        <section className="booklist">
            {
                Books.map((book,index)=>{
                    return(
                    
                    <Book  {...book} key={book.id} getBook={getBook}  indice={index+1}>
                            <form onSubmit={submitter}>
                                <input type="text" name="example" onChange={userTyper}></input>
                            </form>
                            <button type="submit" onClick={clicker} onSubmit={submitter} >MAIL AUTHOR</button> 
                        </Book>
                       
                    )
                })
            }
        </section>
        </>)
}



/*const Image = () => <img src="./images/book1.jpg" alt="The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About"/>;
const Title = () => {
    const titleStyle = {
        color:'red'
     }
return <h2 style={titleStyle}>The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About</h2>;
}
const Author = () => <h2 style={{fontWeight: 'bolder', color:'blue'}} >Mel Robbins</h2>;*/


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);