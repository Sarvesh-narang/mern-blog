import { useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import moment from 'moment';
import { FaThumbsUp } from 'react-icons/fa'
import { useSelector } from "react-redux";

export default function Comment({ comment, onLike }) {
    const [user, setUser] = useState({});
    const {currentUser} = useSelector((state) => state.user);
    
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetch(`/api/user/${comment.userId}`);
                const data = await res.json();
                if (res.ok) {
                    setUser(data);
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        if (comment.userId) {
            getUser();
        }
    }, [comment]);

    return (
        <div className="flex p-4 border-b border-gray-500 text-sm">
            <div className="flex-shrink-0 mr-3">
                {user.profilePicture && (
                    <img className="w-10 h-10 rounded-full bg-gray-200" src={user.profilePicture} alt={user.username || "User"} />
                )}
                
            </div>
            <div className="flex-1">
                <div  className="flex items-center mb-1">
                    <span className="font-bold mr-1 text-xs truncate">{user ? `@${user.username}` : "anonymous user"}</span>
                    <span className="text-gray-300 text-sm">
                        {moment(comment.createdAt).fromNow()}
                    </span>
                </div>
                <p className="text-gray-300 pb-2">{comment.content}</p>
                <div className="flex items-center pt-2 text-xs border-t dark:border-gray-700 max-w-fit gap-2">
                    <button type="button" onClick={()=>onLike(comment._id)} className={`text-gray-300 hover:text-blue-500 ${currentUser && comment.likes.includes(currentUser._id) && '!text-blue-500'}`}>
                        <FaThumbsUp className="text-sm"/>
                    </button>
                    <p>
                        {
                            comment.numberOfLikes > 0 && comment.numberOfLikes + " " + (comment.numberOfLikes === 1 ? "like" : "likes")
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        profilePicture: PropTypes.string,
        username: PropTypes.string,
        content: PropTypes.string,
        createdAt: PropTypes.string,
        numberOfLikes: PropTypes.number
    }).isRequired
};
