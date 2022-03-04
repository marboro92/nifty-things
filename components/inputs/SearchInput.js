import { Loading, Search } from '../icons'

const SearchInput = ({
  dropdownItems = [],
  error,
  hideDropdown,
  inputProps = {},
  loading,
  name,
  noResultsMessage = 'Sorry, there are no matching results.',
  onChange,
  onSelectItem,
  placeholder = 'Search',
  value,
}) => (
  <div className="w-full relative">
    <div className="w-full relative">
      <Search className="absolute translate-y-[-50%] top-1/2 translate-x-1/2" />
      <input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type="search"
        className={`input input-bordered w-full pl-4 ${
          error ? 'input-error' : ''
        }`}
        value={value}
        {...inputProps}
      />
      {loading && (
        <div className="absolute text-primary translate-y-[-50%] top-1/2 right-[45px] h-2 w-2">
          <Loading />
        </div>
      )}
    </div>
    {!hideDropdown &&
      !loading &&
      (dropdownItems.length > 0 ? (
        <div className="absolute w-full bg-base-100 border border-base-300 rounded mt-1 overflow-auto max-h-[200px]">
          {dropdownItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => onSelectItem(item, e)}
              className="w-full p-1 hover:bg-base-200 text-left"
            >
              {item.content}
            </button>
          ))}
        </div>
      ) : (
        value && (
          <div className="absolute w-full bg-base-100 border border-base-300 rounded mt-1 overflow-auto max-h-[200px]">
            <div className="w-full p-1 selection:text-left">
              {noResultsMessage}
            </div>
          </div>
        )
      ))}
  </div>
)

export default SearchInput
