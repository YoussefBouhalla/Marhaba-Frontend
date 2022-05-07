import React from 'react'
import Input from '../../ui/Input'
import Select from '../../ui/Select'
import BookIcon from '../../../assets/icons/book.svg'
import SearchIcon from '../../../assets/icons/search.svg'

function Search() {
  return (
    <div className='deliverer_search'>
        <Input classes='w-100' placeholder='Search for a deliverer' type="text" Icon={SearchIcon}  />
    </div>
  )
}

export default Search