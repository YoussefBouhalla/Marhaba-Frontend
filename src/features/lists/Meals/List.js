import React from 'react'
import Item from './Item'

function List() {
  return (
    <div className='meals_list d-flex flex-wrap justify-content-center'>
        <Item 
            title="Caramel Flan" 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only"
            type="Desserts"
            price="15"
         />
        <Item 
            title="Caesar Salad" 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only"
            type="Starters"
            price="14"
         />
        <Item 
            title="Caramel Flan" 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only"
            type="Desserts"
            price="15"
         />
        <Item 
            title="Caramel Flan" 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only"
            type="Desserts"
            price="15"
         />
        <Item 
            title="Caramel Flan" 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only"
            type="Desserts"
            price="15"
         />
    </div>
  )
}

export default List