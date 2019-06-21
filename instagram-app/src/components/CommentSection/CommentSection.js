import React from 'react';
import './commentsection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => (
                    <Comment comment={comment} />
                ))}
            </div>
        )
    }
}

export default CommentSection;