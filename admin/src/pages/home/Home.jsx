import React from 'react'
import "./home.css"
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/charts/Chart'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo></FeaturedInfo>
      <Chart data={userData} title="User Anaylytics" grid dataKey ="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
