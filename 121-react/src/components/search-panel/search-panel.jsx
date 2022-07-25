import SearchFilters from "./search-filters";
import SearchInput from "./search-input";
import "./search-panel.css";

const SearchPanel = ({onUpdateSearch, onUpdateFilters}) => {
  return (
    <div className="search-panel">
      <SearchInput onUpdateSearch={onUpdateSearch} />
      <SearchFilters onUpdateFilters={onUpdateFilters} />
    </div>
  );
}

export default SearchPanel;
