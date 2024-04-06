import React, { useRef, useState } from 'react';
import SearchIcon from '../../utils/SVG/searchIcon';

const Navbar = () => {
  const [searchBtnClicked, setSearchBtnClicked] = useState(false);
  const searchInputRef = useRef();

  const handleSearchBtnClick = () => {
    setSearchBtnClicked(true);
    setTimeout(() => searchInputRef.current.focus(), 1000);
  };

  return (
    <div className='fixed w-full'>
      <div className='flex justify-between bg-green-10 bg-transparent h-28 items-center text-green-10 mx-6'>
        <p className='text-5xl font-bold'>My Food</p>
        <div className='flex items-center gap-7'>
          <p>Home</p>
          <p>Recipes</p>
          <p>Tips</p>
          <p>Contact</p>
          <div className='flex w-60 relative'>
            <button
              className={`absolute transition-all duration-1000 z-20 ${
                searchBtnClicked ? 'left-52' : 'left-0'
              }`}
              onClick={handleSearchBtnClick}
            >
              <SearchIcon />
            </button>
            <input
              className={`w-full transition-all duration-1000 z-10 bg-transparent border-b border-green-20 outline-none ${
                searchBtnClicked ? 'visible opacity-1' : 'invisible opacity-0'
              }`}
              placeholder='Enter text...'
              ref={searchInputRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
