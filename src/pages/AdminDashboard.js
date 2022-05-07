import React from 'react'
import BotCards from '../features/cards/AdminCards/BotCards'
import TopCards from '../features/cards/AdminCards/TopCards'
import DeliverersSearch from '../features/search/Deliverers/Search'
import MealsSearch from '../features/search/Meals/Search'
import DelivererTable from '../features/tables/Deliverers/Table'
import MealsTable from '../features/tables/Meals/Table'
import BreadCrumb from '../features/ui/BreadCrumb'
import Title from '../features/ui/Title'

function AdminDashboard() {
  return (
    <div className="main py-4 d-flex flex-column gap-4">

        <BreadCrumb page='Admin Dashboard' />
        <h1 className='font_20px font_700'>Admin Dashboard</h1>

        <div className="admin_dash_main d-flex flex-column">
            <TopCards />

            <Title classes="title_right font_20px font_700" content="Meals" />

            <div className='meals_section d-flex flex-column gap-3'>
              <MealsSearch />
              <MealsTable />
            </div>

            <BotCards />

            <div className="deliverers_list d-flex flex-column gap-3">
              <DeliverersSearch />
              <DelivererTable />
            </div>

        </div>

    </div>
  )
}

export default AdminDashboard