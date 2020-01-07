import React, { Component } from 'react';
import Filter from './Filter';
import BookList from './BookList';

class App extends Component {
  state = {
    books: [],
    q: '',
    printType: '',
    bookType: '',
  }
  //GET https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=yourAPIKey
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

  //fetch(url, options) {

  //}
}

  handleChange = event => {
    this.setState({
      q: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.q);
    
    /*
    const bookmark = (({title, url, description, rating}) => ({title, url, description, rating}))(this.state);
    const url ='https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
    const options = {
      method: 'POST',
      body: JSON.stringify(bookmark),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer $2a$10$ZhdeJefcb.5sx/DCmO/n8u5sJLcARAdbHw9tfm1mevGRq3s1.5DpW"
      }
    };*/

    //fetch(url, options) {

    //}
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
        <BookList books={this.state.books}/>
        
      </main>
    );
  }
}

export default App;