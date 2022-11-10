import { useState, useEffect, useCallback, useRef } from 'react';
import Header from './Header';
import List from './List';

const DEBOUNCE_MS = 1000;

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [properties, setProperties] = useState([]);
  const valueRef = useRef(null);

  const onChangeValue = useCallback((e) => {
    valueRef.current = e.target.value;
    setTimeout(() => {
      if (valueRef.current === e.target.value) {
        setSearchValue(valueRef.current);
      }
    }, DEBOUNCE_MS);
  }, [setSearchValue]);

  useEffect(() => {
    const fetchPropertyData = async () => {
      const response = await fetch('/property-data.json');
      const json = await response.json();

      setProperties(json.result.properties.elements);
    };

    fetchPropertyData();
  }, []);

  return (
    <div className="container mx-auto h-screen p-4 flex flex-col">
      <Header onChange={onChangeValue} />
      <List properties={properties} searchValue={searchValue}/>
    </div>
  );
}

export default App;
