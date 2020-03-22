import React from 'react';

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider"></div>
      {comments.map(comment => (
        <div className="comment" key={comments.id}>
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

export default PostComments;
