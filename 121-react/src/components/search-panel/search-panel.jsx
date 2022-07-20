import SearchFilters from "./search-filters";
import SearchInput from "./search-input";
import "./search-panel.css";

const SearchPanel = () => {
  return (
    <div className="search-panel">
      <SearchInput/>
      <SearchFilters/>
    </div>
  );
}

export default SearchPanel;
