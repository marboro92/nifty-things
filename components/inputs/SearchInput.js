import { Search } from '../icons'

const SearchInput = ({
  name,
  placeholder = 'Search',
  onChange,
  inputProps = {},
  error,
  className = '',
  value,
  onSelectItem,
  dropdownItems = [],
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
        } ${className}`}
        value={value}
        {...inputProps}
      />
    </div>
    {dropdownItems.length > 0 && (
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
    )}
  </div>
)

export default SearchInput
