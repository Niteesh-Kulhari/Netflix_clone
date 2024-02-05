import "./ProductList.css"
import { DataGrid} from '@mui/x-data-grid';
import{productRows} from "../../dummyData.js"
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DeleteOutline } from "@material-ui/icons";
import { MovieContext } from "../../context/movieContext/MovieContext.jsx";
import { deleteMovies, getMovies } from "../../context/movieContext/apiCalls.jsx";


export default function ProductList() {
    const{movies,dispatch} = useContext(MovieContext);

    useEffect(()=>{
      getMovies(dispatch)
    },[dispatch])
    const handleDelete = (id)=>{
        deleteMovies(id, dispatch);
    };

    
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        { field: 'movie', Movie: 'Product', width: 200, renderCell: (params)=>{
          //console.log(params.row)
            return(
                <div className="productListItem">
                    <img className="productListImg" src={params.row.img} alt=""></img>
                    {params.row.title}
                </div>
            )
        } },
        { field: 'genre', headerName: 'Genre', width: 120 },
        { field: 'year', headerName: 'year', width: 120 },
        { field: 'limit', headerName: 'limit', width: 120 },
        { field: 'isSeries', headerName: 'isSeries', width: 120 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={{pathname:"/products/" + params.row._id,  movie: params.row }}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                        < DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row._id)}/>
                    </>
                )
            }
          }
        
      ];

  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        columns={columns}
        disableRowSelectionOnClick
        pageSize={8}
        checkboxSelection
        getRowId={(r)=>r._id}
      />
    </div>
  )
}
