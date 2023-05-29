import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="search-form">
        <input type="text" placeholder='Find a User'/>
      </div>
      <div className="user-chats">
        <img src="https://images.pexels.com/photos/16796419/pexels-photo-16796419/free-photo-of-woman-posing-near-vegetables-on-bazaar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={30} height={30} alt="user-chat-img"></img>
        <div className="user-chats-info">
          <span>User-reciever-1</span>
        </div>

      </div>
    </div>
  )
}

export default Search
