import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Main from './pages/Main';
import PostId from './pages/post-id';
import List from './pages/list-page';
import PostIdMessage from './pages/post-id-message-page';
import Post from './pages/post-page';
import Layout from './layouts/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='post' element={<Post />} />
        <Route path='list' element={<List />} />
        <Route path='post/:id'>
          <Route index element={<PostId />} />
          <Route path='message' element={<PostIdMessage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
