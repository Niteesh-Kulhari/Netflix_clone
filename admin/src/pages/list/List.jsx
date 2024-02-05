import { Link, useLocation, useParams } from "react-router-dom"
import "./list.css"
import { Publish } from "@material-ui/icons"
import { useEffect, useState } from "react";
import axios from "axios";

export default function List() {
    const[list, setList] = useState([]);
    const id = useParams()
    useEffect(()=>{
        const fetchData = async ()=>{

            try {
                const res = await axios.get("http://localhost:8800/api/lists/find/"+id.listId, {
                headers: {
                    token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                }
            })
            
            setList(res.data);
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    },[id])


    //console.log(movie);

    
    
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newlist">
        <button className="productCreateButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopRight">
            <div className="productInfoTop">
                <span className="productName">{list.title || ''}</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">{list._id || ''}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">genre:</span>
                    <span className="productInfoValue">{list.genre || ''}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Type:</span>
                    <span className="productInfoValue">{list.type || ''}</span>
                </div>
            </div>
        </div>
      </div>
      <div className="productBottom">
      <form className="productForm">
              <div className="productFormLeft">
                  <label>Movie Title</label>
                  <input type="text" placeholder={list.title || ''} />
                  <label>Genre</label>
                  <input type="text" placeholder={list.genre || ''}/>
                  <label>Type</label>
                  <input type="text" placeholder={list.type || ''}/>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      {/* <img src={movie.img} alt="" className="productUploadImg" /> */}
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  )
}
