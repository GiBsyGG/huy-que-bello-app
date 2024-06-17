import React from 'react'
import Image from 'next/image';
import { SearchBar } from '../search_bar/SearchBar';

export function Header() {
  return (
    <div>

      <div>
        <Image src="/images/Logo.png" alt="logo" width={100} height={100} />
        <SearchBar />
      </div>

      <div>
        
      </div>
    </div>
  )
}