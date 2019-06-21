import React from 'react';
import './postcontainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return(
        <div className="container center">
            {props.dummyData.map(data => (
                <div className="wrap">
                    <div className="alignleft">
                        <img
                        src={data.thumbnailUrl} 
                        className="thumbnailurl"
                        alt="thumbnail" />
                        <h2>{data.username}</h2><br />
                    </div>
                    <img 
                    src={data.imageUrl}
                    alt={data.id} />
                </div>
            ))}
            <CommentSection />
        </div>
    );
};

export default PostContainer;