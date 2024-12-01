import React, { useState } from "react";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import "./Feed.css";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([
    {
      displayName: "John Doe",
      username: "johndoe",
      verified: true,
      text: "Hello world! This is my first tweet.",
      avatar: "https://i.pravatar.cc/150?img=1",
      image: "https://via.placeholder.com/450",
    },
    {
      displayName: "Jane Smith",
      username: "janesmith",
      verified: false,
      text: "React is awesome!",
      avatar: "https://i.pravatar.cc/150?img=2",
      image: "https://via.placeholder.com/450",
    },
  ]);

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox onSubmit={addNewPost} />

      <FlipMove>
        {posts.map((post, index) => (
          <Post
            key={index}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
