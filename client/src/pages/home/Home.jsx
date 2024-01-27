import { AcUnit } from "@material-ui/icons"
import "./home.scss"
import React, { useEffect } from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Featured from "../../Components/featured/Featured"
import List from "../../Components/list/List"
import axios from "axios"
import { useState} from 'react';

const Home = ({type}) => {
  const[lists, setLists] = useState([]);
  const[genre, setGenre] = useState(null);

  useEffect(()=>{
    const getRandomLists = async()=>{
      try{
      const res = await axios.get(
        `http://localhost:8800/api/lists${type ? "?type=" + type : ""}${genre ? "&genre="+genre : ""}`,{
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjRjYmFiOTFlMWU5MzYzNjVlNTM2NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjM2MzY3MCwiZXhwIjoxNzA2Nzk1NjcwfQ.KLeg82wiQX7mHqv6VWTm5d83G3-z1rcjS3nTm0h3mzk"
          }
        }
      );
      setLists(res.data);
      }catch(err){
        console.log(err);
      }
    };
    getRandomLists();
   },[type, genre]);
  return (
    <div className="home">
        <Navbar></Navbar>
        <Featured type={type}></Featured>

        {lists.map((list)=>(
          <List list = {list}></List>
        ))}
        
    </div>
  )
}

export default Home
