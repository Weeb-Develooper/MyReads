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
        console.log(value);
        BooksAPI.search(this.state.query).then(searchedBooks => {
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
                  <ol className="books-grid"></ol>
                </div>
              </div>
            
            )
    }
    
}

export default SearchBooks;