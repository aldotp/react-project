import Article from "../components/Article";
import postsData from "../posts.json";
import Search from "../components/Search";
import { useEffect, useState } from "react";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    const filteredPost = postsData.filter((item) => item.title.includes(value));
    setPosts(filteredPost);
    setTotalPosts(filteredPost.length);
  };

  useEffect(() => {
    console.log("ada post baru");
  }, [posts]);

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((props, index) => (
        <Article {...props} key={index} name={name} />
      ))}
    </>
  );
}

export default Homepage;
