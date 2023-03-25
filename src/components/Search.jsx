import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
    return (
        <div className='search'>
            <MdSearch className='search-icons' size='1.3em' />
            <input
                onChange={(event) => handleSearchNote(event.target.value)} //changes state of searchText
                type='text'
                placeholder='search note...'
            />
        </div>
    );
};

export default Search;