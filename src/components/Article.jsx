import PropTypes from "prop-types";

const NewArticle = () => {
  return <span> -- Baru !!!</span>;
};

function Article(props) {
  return (
    <>
      <div>
        <h3>{props.title}</h3>
        <small>
          Date: {props.date} tags: {props.tags.join(", ")}
          {props.isNew && <NewArticle />}
        </small>
      </div>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  isNew: PropTypes.bool.isRequired,
};

export default Article;
