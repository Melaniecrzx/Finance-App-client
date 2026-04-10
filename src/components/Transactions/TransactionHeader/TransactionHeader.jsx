import SearchBar from '../TransactionHeader/SearchBar';
import SortFilter from './SortFilter';

export default function TransactionHeader({
  searchInput,
  setSearchInput,
  handleSearch,
}) {
  return (
    <section className="flex justify-between">
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      <SortFilter />
    </section>
  );
}
