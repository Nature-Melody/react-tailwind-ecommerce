export type SearchBarProp = {
  value: string;
  setInputValue: (value: string) => void;
  onSearch: (value: string) => void;
};

export const SearchBar = ({ value, setInputValue, onSearch }: SearchBarProp) => {
  return (
    <>
      <div className="flex mx-auto w-full max-w-2xl gap-2">
        <div className="relative grow">
          <input
            id="searchInput"
            type="text"
            placeholder="Search for products..."
            className="w-full border-2 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={value}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button onClick={() => onSearch(value)} className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition-colors">
          Search
        </button>
      </div>
    </>
  );
};
