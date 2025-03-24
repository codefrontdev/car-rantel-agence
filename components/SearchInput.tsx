import { Search } from 'lucide-react'
import React from 'react'
import Button from './Button'

const SearchInput = () => {
  return (
    <div className='flex items-center border border-gray-300 rounded-full space-x-2'>
        <Search />
        <input type="text" />
        <Button btntext='Search' />
    </div>
  )
}

export default SearchInput