import {Link} from "react-router-dom";

const ComicsItem = ({title, thumbnail, price, id}) => {
  return (
    <li className="comics__item">
      <Link to={`/comics/${id}`}>
        <img src={thumbnail} alt={title} className="comics__item-img" />
        <div className="comics__item-name">{title}</div>
        <div className="comics__item-price">{price}$</div>
      </Link>
    </li>
  )
};

export default ComicsItem;