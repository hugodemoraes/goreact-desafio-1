import React from 'react';
import PropTypes from 'prop-types';

const Post = props => (
  <div className="post">
    <img src={props.post.img} alt="" srcSet="" />
    <div className="postInfo">
      <span className="userName">{props.post.name}</span>
      <span className="postedAt">{props.post.postedAt}</span>
    </div>
    <hr />
    <p>{props.post.content}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    postedAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
