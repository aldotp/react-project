import Article from "../components/Article";
import postsData from "../posts.json";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);

  const onSearchChange = (value) => {
    const filteredPost = postsData.filter((item) => item.title.includes(value));
    setPosts(filteredPost);
    setTotalPosts(filteredPost.length);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setExternalPosts(json));
  }, []);

  return (
    <>
      <Navbar />
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}

      <hr />

      <h2>External Posts</h2>
      {externalPosts.map((item, index) => {
        return <div key={index}>- {item.title}</div>;
      })}
    </>
  );
}

export default Homepage;
