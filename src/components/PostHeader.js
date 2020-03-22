import React from 'react';

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img src={author.avatar} className="avatar"/>
      <div className="details">
        <span className="name">{author.name}</span>
        <span className="date">{date}</span>
      </div>
    </div>
  );
}

export default PostHeader;
