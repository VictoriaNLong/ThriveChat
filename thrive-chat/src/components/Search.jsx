import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="search-form">
        <input type="text" placeholder='Search for user' />
      </div>
      <div className="user-chats">
        {/* TODO: add image, same as Navbar.jsx */}
        {/* <img src="" alt="user-chat-img" /> */}
        <div className="user-chats-info">
          <span>User-reciever-1</span>
        </div>

      </div>
    </div>
  )
}

export default Search
