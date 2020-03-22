import React from 'react';

import PostHeader from './PostHeader';

function Post({ author, date, content, comments}) {
  return (
    <div className="post">
      <PostHeader author={author} date={date}/>
      <p className="content">{content}</p>
    </div>
  );
}

export default Post;
