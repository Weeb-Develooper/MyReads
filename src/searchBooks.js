import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
class SearchBooks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchedBooks:[],
            query:''
        }
    }

    getBooks = (value) => {
        this.setState({
            query: value.trim()
        })
        console.log("search Value",value);
        BooksAPI.search(value).then(searchedBooks => {
            this.setState({
                searchedBooks
            })
        });
        
    }
            

    render(){
  
        return(
        
            <div className="search-books">
                <div className="search-books-bar">
                  <Link to='/' className="close-search">Close</Link>
                  <div className="search-books-input-wrapper">
                    {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
        
                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input type="text" placeholder="Search by title or author" onChange={
                        (event) => this.getBooks(event.target.value)
                    }/>
        
                  </div>
                </div>
                <div className="search-books-results">
                  {console.log("books returned",this.state.searchedBooks)}
                  <ol className="books-grid">
                   {this.state.searchedBooks.map(book => <li key={book.title}>
    <div className="book">
    <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `${book.imageLinks.thumbnail}` }}></div>
        <div className="book-shelf-changer">
        <select onChange = {
            (event) => {
                book.shelf=event.target.value;
                console.log("searchJS onchange",book);

            this.props.changeShelf(book,event.target.value);
            // this.props.addBook(book);
          }
            }>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
        </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors}</div>
    </div>
</li>)}
                  </ol>
                </div>
              </div>
            
            )
    }
    
}

export default SearchBooks;