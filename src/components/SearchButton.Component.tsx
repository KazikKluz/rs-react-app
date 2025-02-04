interface SearchButtonProps {
  onSearch: () => Promise<void>;
  isLoading: boolean;
  disabled?: boolean;
}

const SearchButton = ({ onSearch, isLoading, disabled }: SearchButtonProps) => {
  return (
    <button
      onClick={onSearch}
      disabled={isLoading || disabled}
      className="bg-lilac text-dark px-4 py-2 rounded hover:bg-purpureus  
                disabled:bg-bright disabled:cursor-not-allowed"
    >
      {isLoading ? 'Searching...' : 'Search'}
    </button>
  );
};

export default SearchButton;
