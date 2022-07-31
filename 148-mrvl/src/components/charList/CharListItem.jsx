import {Component} from "react";

class CharListItem extends Component {
  render() {
    const {thumbnail, name, id, onSelectChar, selectedChar} = this.props;
    return (
      <li
        tabIndex={0}
        onClick={() => {
          onSelectChar(id)
        }}
        className={`char__item${id === selectedChar ? " char__item_selected" : ""}`}
        onKeyPress={(e) => {
          if (e.key === ' ' || e.key === "Enter") {
            onSelectChar(id);
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