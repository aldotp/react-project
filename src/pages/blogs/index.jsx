// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blog() {
  const posts = useLoaderData();

  // const [posts, setPosts] = useState(postsData);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json));
  // }, []);

  return (
    <>
      <h2>My Blog Posts</h2>
      <div className="container-body">
        {posts.map((item, index) => {
          return (
            <div key={index}>
              <Link to={`/blog/${item.id}`}>- {item.title}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Blog;
