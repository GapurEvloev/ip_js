import {Component} from "react";

class CharListItem extends Component {
  render() {
    const {thumbnail, name, id, i, onSelectChar, propRef, focusOnItem} = this.props;
    return (
      <li
        ref={propRef}
        tabIndex={0}
        onClick={() => {
          onSelectChar(id)
          focusOnItem(i);
        }}
        className={`char__item`}
        onKeyPress={(e) => {
          if (e.key === ' ' || e.key === "Enter") {
            onSelectChar(id);
            focusOnItem(i);
          }
        }}
        >
        <img src={thumbnail} alt="abyss" />
        <div className="char__name">{name}</div>
      </li>
    )
  }
}

export default CharListItem;