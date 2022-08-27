import React from 'react'
import './profile.css'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className='profile'>
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">profile of user</div>
                    <div className="profileRightBottom">
                        <Feed className='feed' />
                        <Rightbar className='rightbar' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile