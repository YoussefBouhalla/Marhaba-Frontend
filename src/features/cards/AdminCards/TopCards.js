import React from 'react'
import Card from '../Card'

function TopCards() {
  return (
    <div className='top_cards'>
        <Card title="Meals" description="Number of Meals created in the application ." amount="1000" />
        <Card title="Offers" description="Number of Offers created in the application ." amount="1000" />
        <Card title="Not taken commands" description="Number of commands that are not taken in the application ." amount="1000" />
        <Card title="Commands" description="Number of commands created in the application ." amount="1000" />
        <Card title="Delivired commands" description="Number of commands created in the application ." amount="1000" />
    </div>
  )
}

export default TopCards