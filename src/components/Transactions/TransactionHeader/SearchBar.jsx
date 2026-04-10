import IconSearch from '../../Icon/IconSearch';

export default function SearchBar({ searchInput, setSearchInput }) {
  return (
    <div className="border flex justify-between items-center border-beige-500 py-3 px-5 rounded-lg w-[320px]">
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="outline-none"
        placeholder="Search transaction"
        id="searchTransaction"
      />
      <button>
        <IconSearch />
      </button>
    </div>
  );
}
