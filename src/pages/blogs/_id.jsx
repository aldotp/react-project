import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
  const params = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then((response) => response.json())
        .then((json) => setPost(json));
    };
    fetchData();
  }, [params.id]);

  return (
    <>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </>
  );
}

export default SinglePost;
