import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './listBooks'
import SearchBooks from './searchBooks'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
constructor(){
  super();
  this.state={
    books : [],
    shelf: '',
  }
}

componentDidMount(){
  BooksAPI.getAll().then(books =>  {this.setState({
      books
  })
  console.log("books state in AppJs",this.state.books)
}) 
}

detectChange = (book,value) => {
  BooksAPI.update(book,value);
  this.state.books.map(item =>{
    if(item.id === book.id){
      item.shelf = value;
    }
    return "done";
  })
  this.setState({
    shelf:value
  })
}


bookAdd = (book) => { 
  this.setState((previousState) => ({
    books: previousState.books.concat(book)
  }))
  console.log("book from search",book);

}

  render() {
    return (
      <div className="app">
        <p>{this.state.text}</p>
        <Route exact path='/'render = {() => (<ListBooks viewBooks = {this.state.books} />)}/>
        <Route exact path='/search'render = {() => (<SearchBooks changeShelf = {this.detectChange} addBook={this.bookAdd}/>)}/>
      </div>
    )
  }
}

export default BooksApp
