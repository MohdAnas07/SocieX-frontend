import React from 'react'
import './rightbar.css'

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
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/person/4.jpeg" alt="profile" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Doe</span>
                    </li>

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/person/4.jpeg" alt="profile" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Doe</span>
                    </li>

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/person/4.jpeg" alt="profile" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Doe</span>
                    </li>

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/person/4.jpeg" alt="profile" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Doe</span>
                    </li>

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/person/4.jpeg" alt="profile" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Doe</span>
                    </li>

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/person/4.jpeg" alt="profile" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Doe</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}
