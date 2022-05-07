import React from 'react'
import Input from '../../ui/Input'
import Select from '../../ui/Select'
import BookIcon from '../../../assets/icons/book.svg'
import SearchIcon from '../../../assets/icons/search.svg'

function Search({setMealsSearch, mealsSearch}) {

  const handleName = (e) => {
    setMealsSearch({...mealsSearch , title: e.target.value})
  }

  const handleType = (e) => {
    setMealsSearch({...mealsSearch , type: e.target.value})
  }

  const handlePriceMin = (e) => {
    setMealsSearch({...mealsSearch , priceMin: e.target.value})
  }
  const handlePriceMax = (e) => {
    setMealsSearch({...mealsSearch , priceMax: e.target.value})
  }

  return (
    <div className='meal_search d-flex flex-column gap-2'>
        <div className='section d-flex gap-2'>
            <Input classes='w-50' placeholder='Search for a meal' type="text" Icon={SearchIcon} onInput={handleName} />
            <Select classes='w-50' subject="type" Icon={BookIcon} options={['starter' , 'main' , 'dessert']} onChange={handleType} />
        </div>
        <div className='section d-flex gap-2'>
            <Input classes='w-50'placeholder='Min price' type="number" Icon={SearchIcon} onInput={handlePriceMin} />
            <Input classes='w-50' placeholder='Max Price' type="number" Icon={SearchIcon} onInput={handlePriceMax} />
        </div>

    </div>
  )
}

export default Search