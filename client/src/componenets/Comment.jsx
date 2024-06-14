import { useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import moment from 'moment';

export default function Comment({ comment }) {
    const [user, setUser] = useState({});
    console.log(user);
    
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
    }).isRequired
};
