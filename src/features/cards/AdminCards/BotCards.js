import React from 'react'
import Card from '../Card'

function BotCards() {
  return (
    <div className='bot_cards'>
        <Card title="Users" description="Number of users in the application ." amount="1000" />
        <Card title="Clients" description="Number of client users in the application ." amount="1000" />
        <Card title="Deliverers" description="Number of deliverer users in the application . ." amount="1000" />
    </div>
  ) 
}

export default BotCards 