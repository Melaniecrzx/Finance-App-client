import SearchBar from '../TransactionHeader/SearchBar';
import SortFilter from './SortFilter';
import CategoryFilter from './CategoryFilter';

export default function TransactionHeader({
  searchInput,
  setSearchInput,
  handleSearch,
  sort,
  onSort,
  category,
  onCategory,
}) {
  return (
    <section className="flex justify-between">
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      <div className="flex gap-6 items-center">
        <SortFilter value={sort} onChange={onSort} />
        <CategoryFilter value={category} onChange={onCategory} />
      </div>
    </section>
  );
}
