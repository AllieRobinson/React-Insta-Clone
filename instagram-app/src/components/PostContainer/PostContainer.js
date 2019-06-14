import React from 'react';
import './postcontainer.css';

const PostContainer = props => {
    return(
        <div className="container center">
            {props.dummyData.map(data => (
                <div className="wrap">
                <div className="alignleft">
                <img
                src={data.thumbnailUrl} 
                className="thumbnailurl" />
                <h2>{data.username}</h2><br />
                </div>
                <img 
                src={data.imageUrl} />
                </div>
            ))}
        </div>
    );
};

export default PostContainer;