import React from 'react';
import UsersList from "./components/UsersList";
import PostsList from "./components/PostsList";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
        <UsersList/>
        <div className="posts-wrap">
            <Search/>
            <PostsList/>
        </div>
    </div>
  );
}

export default App;
