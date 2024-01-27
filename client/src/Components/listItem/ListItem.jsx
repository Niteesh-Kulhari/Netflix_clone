import { PlayArrow, Add, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"
import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({index, item}){
    const[isHovered, setIsHovered] = useState(false);
    const[movie, setMovie] = useState({});

    useEffect(()=>{
        const getMovie = async ()=>{
            try{
                const res = await axios.get(
                    "http://localhost:8800/api/movies/find/"+item,{
                      headers:{
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjRjYmFiOTFlMWU5MzYzNjVlNTM2NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjM2MzY3MCwiZXhwIjoxNzA2Nzk1NjcwfQ.KLeg82wiQX7mHqv6VWTm5d83G3-z1rcjS3nTm0h3mzk"
                      },
                    });
                    setMovie(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getMovie();
     },[item]);

    return(
        <Link to={{pathname:"/watch", movie:movie}}>
        <div className="listItem" 
        onMouseEnter={()=>setIsHovered(true)} 
        onMouseLeave={()=>setIsHovered(false)}
        style={{left: isHovered && index * 225 -50 + (index * 2.5)}}
        >
            <img 
            src= {movie.img}
            alt=""
            />
            {isHovered && (
                <>
            <video src={movie.trailer} autoPlay={true} loop/>
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpAltOutlined className="icon"/>
                    <ThumbDownOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>{movie.duration}</span>
                    <span className="limit">+{movie.limit}</span>
                    <span>{movie.year}</span>
                </div>
                <div className="description">
                    {movie.description}
                </div>
                <div className="genre">{movie.genre}</div>
            </div>
                </>
            )}
            
        </div>
        </Link>
    )
}