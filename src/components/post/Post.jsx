import React from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';

const Post = ({ post }) => {

    const { id, photo, desc, date, userId, like, comment } = post;

    let { profilePicture, username } = Users.filter(user => user.id === userId)[0]

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={profilePicture} alt="profile" className="postProfileImg" />
                        <span className="postUsername">{username}</span>
                        <span className="postData">{date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc} </span>
                    <img className="postImg" src={photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" alt="icon" />
                        <img className="likeIcon" src="/assets/heart.png" alt="icon" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post