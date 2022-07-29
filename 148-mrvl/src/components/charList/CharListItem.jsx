const CharListItem = ({thumbnail, name, active}) => {
  return (
    <li className={`char__item${active ? "char__item_selected" : ""}`}>
      <img src={thumbnail} alt="abyss" />
      <div className="char__name">{name}</div>
    </li>
  )
}

export default CharListItem;