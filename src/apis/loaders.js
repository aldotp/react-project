export const posts = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`);
};

export const postByID = ({ params }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
};
