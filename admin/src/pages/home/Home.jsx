import React, { useMemo, useState, useEffect } from 'react'
import "./home.css"
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/charts/Chart'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import axios from "axios"

export default function Home() {
  const MONTHS = useMemo(
    ()=>[
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],[]
  )
  const[userStats, setUserStats] = useState([]);

  useEffect(()=>{
    const getStats = async ()=>{
      try{
          const res  = await axios.get("http://localhost:8800/api/users/stats", {
          headers:{
          token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjRjYmFiOTFlMWU5MzYzNjVlNTM2NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjYwMTcwNywiZXhwIjoxNzA3MDMzNzA3fQ.Tj7q8qBjm16Fb7tXhu6FIcX96WZf9R4FL_e6_VOoRf0"
          },
        });
        const newData = res.data.map(item => ({
          name: MONTHS[item._id - 1],
          "New user": item.total
        }));

        newData.sort((a, b) => MONTHS.indexOf(a.name) - MONTHS.indexOf(b.name));
        setUserStats(newData);
      }catch(err){
        console.log(err)
      }
    }
    getStats();
    
  }, [MONTHS]);
  
  return (
    <div className='home'>
      <FeaturedInfo></FeaturedInfo>
      <Chart data={userStats} title="User Anaylytics" grid dataKey ="New user"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
