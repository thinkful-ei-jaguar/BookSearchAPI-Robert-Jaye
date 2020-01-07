import React, { Component } from 'react';
import Filter from './Filter';
//import BookList from './BookList';

class App extends Component {
  state = {
    books: [],
    q: '',
    printType: '',
    bookType: '',
  }

  componentDidMount() {
    const APIkey = 'AIzaSyDVXu88ByR9KcBl1H0IhiAc84Zg3d6qpuA';
    const url = 'https://www.googleapis.com/books/v1/volumes?';
    const options = {
      method: 'GET',
      headers: {
        "Authorization": {APIkey},
        "Content-Type": "application/json"
      }
    };
  }

  handleChange = event => {
    this.setState({
      q: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const APIkey = 'AIzaSyDVXu88ByR9KcBl1H0IhiAc84Zg3d6qpuA';
    const url = 'https://www.googleapis.com/books/v1/volumes?&q=' + this.state.q +'&key=' + APIkey;
    const options = {
      method: 'GET'
    };

    fetch(url, options) 
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        books: data,
        error: null
      });
      console.log(this.state.books)
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
  }

  render() {
    return (
      <main className='App'>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          Search:
          <input type="text" name="Search" onChange={this.handleChange}></input>
          <button type='submit' value='submit'>Search</button>
        </form>
        <Filter />
        
        
      </main>
    );
  }
}
//<BookList books={this.state.books}/>
export default App;