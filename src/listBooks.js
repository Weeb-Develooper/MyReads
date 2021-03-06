import React from 'react'
import {Link} from 'react-router-dom'
class ListBooks extends React.Component{

    render(){
        return(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      { this.props.viewBooks.filter(book=> book.shelf.toLowerCase() === 'currentlyreading').map(book => 
    
                            <li key={book.title}>
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `${book.imageLinks.thumbnail}` }}></div>
                                <div className="book-shelf-changer">
                                <select onChange = {
                                    (event) => {
                                        console.log(book)
                                    this.props.changeShelf(book,event.target.value)}
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
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      { this.props.viewBooks.filter(book=> book.shelf.toLowerCase() === 'wanttoread').map(book => 
    
                        <li key={book.title}>
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `${book.imageLinks.thumbnail}` }}></div>
                                <div className="book-shelf-changer">
                                <select onChange = {
                                    (event) => {
                                        console.log(book)
                                    this.props.changeShelf(book,event.target.value)}
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
                        </li>
                    )}
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      { this.props.viewBooks.filter(book=> book.shelf.toLowerCase() === 'read').map(book => 
    
                            <li key={book.title}>
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `${book.imageLinks.thumbnail}` }}></div>
                                <div className="book-shelf-changer">
                                <select onChange = {
                                    (event) => {
                                        console.log(book)
                                    this.props.changeShelf(book,event.target.value)}
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
                        </li>
                        )}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to='/search'><button>Add a book</button></Link>
              </div>
            </div>
          
    )
    }
    
}
export default ListBooks;