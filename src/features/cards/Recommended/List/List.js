import React from 'react'
import Item from './Item'

function List() {
  return (
    <div className='rec_list d-flex flex-column'>
      <Item />
      <Item />
      <Item />
    </div>
  )
}

export default List