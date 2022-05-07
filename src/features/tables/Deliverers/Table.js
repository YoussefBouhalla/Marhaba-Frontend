import React from 'react'
import Item from './Item'

function Table() {
  return (
    <div className="table-responsive">
        <table class="table table-hover table-bordered m-0">
            <thead className='table-light'>
              <tr className='font_12px font_600'>
                <th scope="col">Image</th>
                <th scope="col">Username</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <Item />
              <Item />
              <Item />
            </tbody>
        </table>
    </div>
  )
}

export default Table