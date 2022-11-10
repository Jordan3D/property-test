import {memo} from 'react';
import SearchBox from './SearchBox';

const Header = memo(({onChange}) =>{
  return (
    <header className="flex flex-col md:flex-row justify-between">
      <h1 className="text-8xl">
        Posh Properties
      </h1>

      <SearchBox onChange={onChange}/>
    </header>
  );
});

export default Header;
