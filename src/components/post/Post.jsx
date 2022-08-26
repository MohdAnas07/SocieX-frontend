import React from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpeg" alt="profile" className="postProfileImg" />
                        <span className="postUsername">Emily Willis</span>
                        <span className="postData">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">hey, it's my first post :) </span>
                    <img className="postImg" src="/assets/post/2.jpeg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" alt="icon" />
                        <img className="likeIcon" src="/assets/heart.png" alt="icon" />
                        <span className="postLikeCounter">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post