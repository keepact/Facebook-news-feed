import React from 'react';
import './App.css';

import PostList from './components/PostList';
import Header from './components/Header';

function App() {
  return(
    <div className="container">
      <Header />
      <PostList />
    </div>
  );
}

export default App;