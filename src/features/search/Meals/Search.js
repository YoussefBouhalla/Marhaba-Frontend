import React from 'react'
import Input from '../../ui/Input'
import Select from '../../ui/Select'
import BookIcon from '../../../assets/icons/book.svg'
import SearchIcon from '../../../assets/icons/search.svg'

function Search() {
  return (
    <div className='meal_search d-flex flex-column gap-2'>
        <div className='section d-flex gap-2'>
            <Input classes='w-50' placeholder='Search for a meal' type="text" Icon={SearchIcon}  />
            <Select classes='w-50' subject="type" Icon={BookIcon} options={['starter' , 'main' , 'dessert']} />
        </div>
        <div className='section d-flex gap-2'>
            <Input classes='w-50'placeholder='Search for a meal' type="text" Icon={SearchIcon}  />
            <Input classes='w-50' placeholder='Search for a meal' type="text" Icon={SearchIcon}  />
        </div>

    </div>
  )
}

export default Search