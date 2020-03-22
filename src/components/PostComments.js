import React from 'react';

function PostComments({ comments }) {
  if(comments.length > 0){
    return (
      <div className="post-comments">
        <div className="divider"></div>
        {comments.map(comment => (
          <div className="comment" key={comment.id}>
            <img src={comment.author.avatar} className="avatar"/>
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    );
  }
  else
    return <></>;
}

export default PostComments;
