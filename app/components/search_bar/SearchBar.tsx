'use client'

import React from 'react'
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";

export function SearchBar() {

  let [searchValue, setSearchValue] = useState('');

  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const search = () => {
    console.log(searchValue);
  }

  return (
    <div>
      <input type="text" onChange={updateSearch} value={searchValue} />
      <button onClick={search}>
        <FaSearch />
      </button>
    </div>
  )
}