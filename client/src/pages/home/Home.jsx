import { AcUnit } from "@material-ui/icons"
import "./home.scss"
import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Featured from "../../Components/featured/Featured"
import List from "../../Components/list/List"

const Home = () => {
  return (
    <div className="home">
        <Navbar></Navbar>
        <Featured type="movie"></Featured>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
    </div>
  )
}

export default Home
