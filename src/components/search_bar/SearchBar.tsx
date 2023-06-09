import SearchIcon from '../../assets/icon/SearchIcon'
import { ISearchBarProps } from './SearchBar.interfaces';

const SearchBar = (props: ISearchBarProps) => {
    const { handleSearch } = props;
    
    return (
        <div className='h-16 flex items-center w-6/12 relative'>
            <span className='absolute left-2 max-w-full max-h-full z-10'><SearchIcon /></span>
            <input
                type="text" 
                className='shadow appearance-none border rounded-full w-full h-8 px-9 text-gray-700 leading-tight focus:outline-none focus:shadow-outline drop-shadow-md'
                placeholder='Search Product...' 
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar