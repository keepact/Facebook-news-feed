import React from 'react';

function PostHeader({ author, date }) {
    return (
        <div className="post-content-wrapper">
          <img src={author.avatar} width="32" />
          <div className="posts-data">
            <span className="author">{author.name}</span>
            <br />
            <span className="date">{date}</span>
          </div>
        </div>
    )
}

function PostComments({ comments }) {
  return (
    <>
      {comments.map(comment => (
        <div key={comment.id} className="post-comments">
          <img src={comment.author.avatar} />
          <div className="comment-data">
            <p>{comment.content}</p>
          </div>
        </div>
        ))}
    </>
  )
}

function PostItem({ comments, author, date, content }) {
  return (
    <div className ="post-content">
      <PostHeader author={author} date={date} />
      <p className="post-content-text">{content}</p>
      <PostComments comments={comments} />
    </div>
  )
}

export default PostItem;