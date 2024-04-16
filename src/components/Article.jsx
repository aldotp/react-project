import PropTypes from "prop-types";
import GlobalContext from "../context/index";
import { useContext } from "react";

const NewArticle = () => {
  return <span> -- Baru !!!</span>;
};

function Article(props) {
  const user = useContext(GlobalContext);

  return (
    <>
      <div>
        <h3>{props.title}</h3>
        <small>
          Date: {props.date} tags: {props.tags.join(", ")}
          {props.isNew && <NewArticle />}
        </small>
        <div>
          <small>Ditulis oleh {user.username}</small>
        </div>
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
