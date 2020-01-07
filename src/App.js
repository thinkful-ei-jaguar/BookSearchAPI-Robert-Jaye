import React from 'react';
import Filter from './Filter';
import BookList from './BookList';

function App() {
  return (
    <main className='App'>
      <header>
        <h1>Google Book Search</h1>
      </header>
      <form>
        Search:
        <input type="text" name="Search"></input>
        <button type='submit'>Search</button>
      </form>
      <Filter />
      <BookList />
      
    </main>
  );
}

export default App;