const ComicsItem = ({title, thumbnail, price}) => {
  return (
    <li className="comics__item">
      <a href="#/">
        <img src={thumbnail} alt={title} className="comics__item-img" />
        <div className="comics__item-name">{title}</div>
        <div className="comics__item-price">{price}$</div>
      </a>
    </li>
  )
};

export default ComicsItem;