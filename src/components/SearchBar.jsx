import { useState } from 'react';
import React from 'react';

function SearchBar({ onFilter }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div>
      <h2>SearchBar</h2>
      <input
        name="name"
        type="search"
        value={input}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
