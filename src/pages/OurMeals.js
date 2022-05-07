import React, { useEffect, useState } from 'react'
import Recommended from '../features/cards/Recommended/Recommended'
import MealsList from '../features/lists/Meals/List'
import MealsSearch from '../features/search/Meals/Search'
import BreadCrumb from '../features/ui/BreadCrumb'
import { searchMeals } from '../services/MealsServices'
function OurMeals() {

  const [mealsSearch, setMealsSearch] = useState({});
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    let timeout

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      searchMeals(mealsSearch).then(res => {
        setMeals(res.data);
      })
    }, 1000);
    
  }, [mealsSearch]);

  
  return (
    <div className='main py-4 d-flex flex-column gap-4'>
        <BreadCrumb page='Our Meals' />

        <div>
            <h1 className='font_20px font_700'>Our Meals</h1>
            <p className='font_12px font_400 m-0'>Here is a list of our delecious meals</p>
        </div>

        <div className='page_main d-flex'>
            <div className='list_section d-flex flex-column'>
                <MealsSearch  setMealsSearch={setMealsSearch} mealsSearch={mealsSearch} />
                <MealsList meals={meals} />
            </div>

            <Recommended />
        </div>
    </div>
  )
}

export default OurMeals