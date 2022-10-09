import { ChatBubbleOutlineOutlined, DarkModeOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material';
import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
          <div className="search">
            <input type='text' placeHolder='Search...'/>
            <SearchOutlined />
           </div>
           <div className="items">
              <div className="item">
                  <LanguageOutlined className='icon'/>
                  English
              </div>
              <div className="item">
                  <DarkModeOutlined className='icon'/>
              </div>
              <div className="item">
                  <NotificationsNoneOutlined className='icon'/>
                  <div className="counter">1</div>
              </div>
              <div className="item">
                  <ChatBubbleOutlineOutlined className='icon'/>
                  <div className="counter">4</div>
              </div>
              <div className="item">
                  <ListOutlined className='icon'/>
              </div>
              <div className="item">
                 <img 
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhnor1rec-7jBoIvjIZdmvDxi9Yc82qUdVg&usqp=CAU'
                  alt='avatar'
                  className='avatar'
                 />
              </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar