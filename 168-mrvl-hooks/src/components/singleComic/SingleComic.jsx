import "./singleComic.scss";
import {Link} from "react-router-dom";

const SingleComic = ({comic}) => {
  return (
    <div className="single-comic">
      <img src={comic.thumbnail} alt="x-men" className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{comic.title}</h2>
        <p className="single-comic__descr">
          {comic.description}
        </p>
        <p className="single-comic__descr">{comic.pageCount}</p>
        <p className="single-comic__descr">Language: {comic.language}</p>
        <div className="single-comic__price">{comic.price}$</div>
      </div>
      <Link to="/comics" className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};

export default SingleComic;
