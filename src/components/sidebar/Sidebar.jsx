import React from 'react'
import './sidebar.css'
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <FeedIcon className='sidebarIcon' />
                        <span className='sidebarListItemText'>Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatIcon className='sidebarIcon' />
                        <span className='sidebarListItemText'>Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledIcon className='sidebarIcon' />
                        <span className='sidebarListItemText'>Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupIcon className='sidebarIcon' />
                        <span className='sidebarListItemText'>Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkIcon className='sidebarIcon' />
                        <span className='sidebarListItemText'>Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <ContactSupportIcon className='sidebarIcon' />
                        <span className='sidebarListItemText'>Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkIcon className='sidebarIcon' />
                        <span className='sidebarListItemText'>Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventIcon className='sidebarIcon' />
                        <span className='sidebarListItemText'>Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolIcon className='sidebarIcon' />
                        <span className='sidebarListItemText'>Courses</span>
                    </li>
                </ul>

                <button className="sidebarButton">Show More</button>
                <hr className='sidebarHr' />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">monica rain</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">ranny dip</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/5.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">july dake</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/6.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">dani daniels</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/7.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">emily willis</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/8.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">shopie Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/9.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">monica rain</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/10.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">ranny deep</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
