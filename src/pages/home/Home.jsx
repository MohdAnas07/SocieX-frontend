import React from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './home.css'

export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar className='sidebar' />
                <Feed className='feed' />
                <Rightbar className='rightbar' />
            </div>
        </>
    )
}

