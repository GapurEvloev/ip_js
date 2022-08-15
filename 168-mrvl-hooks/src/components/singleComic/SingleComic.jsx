import "./singleComic.scss";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

const SingleComic = ({data}) => {
  return (
    <div className="single-comic">
      <Helmet>
        <meta
          name="description"
          content={`${data.title} comics book`}
        />
        <title>{data.title}</title>
      </Helmet>
      <img src={data.thumbnail} alt="x-men" className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{data.title}</h2>
        <p className="single-comic__descr">
          {data.description}
        </p>
        <p className="single-comic__descr">{data.pageCount}</p>
        <p className="single-comic__descr">Language: {data.language}</p>
        <div className="single-comic__price">{data.price}$</div>
      </div>
      <Link to="/comics" className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};

export default SingleComic;


