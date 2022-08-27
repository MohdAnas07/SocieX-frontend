import React from 'react'
import Online from '../online/Online'
import './rightbar.css'

import { Users } from '../../dummyData'


export default function Rightbar() {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="./assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Mohd Anas</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img src="/assets/ad.png" alt="ad img" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>

                <ul className="rightbarFriendList">
                    {
                        Users.map(user => (
                            <Online key={user.id} user={user} />
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}
