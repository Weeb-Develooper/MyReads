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
  console.log(this.state.books)
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

  render() {
    return (
      <div className="app">
        <p>{this.state.text}</p>
        <Route exact path='/'render = {() => (<ListBooks viewBooks = {this.state.books} changeShelf = {this.detectChange}/>)}/>
        <Route exact path='/search'render = {() => (<SearchBooks changeShelf = {this.detectChange}/>)}/>
      </div>
    )
  }
}

export default BooksApp
