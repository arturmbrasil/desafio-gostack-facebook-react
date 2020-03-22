import React from 'react';

import PostHeader from './PostHeader';

function Post({ author, date, content, comments}) {
  return (
    <div className="post">
      <PostHeader author={author} date={date}/>
    </div>
  );
}

export default Post;
