import { useState } from 'react';
import React from 'react';

function SearchBar({ onFilter }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    onFilter(input);
  };

  return (
    <div>
      <input
        name="name"
        type="search"
        value={input.name}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
