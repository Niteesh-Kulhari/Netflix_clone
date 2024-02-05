import "./listList.css"
import { DataGrid} from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DeleteOutline } from "@material-ui/icons";
import { ListContext } from "../../context/listContext/ListContext.jsx";
import { deleteList, getLists } from "../../context/listContext/apiCalls.jsx";


export default function ListList() {
    const{lists,dispatch} = useContext(ListContext);

    useEffect(()=>{
      getLists(dispatch)
    },[dispatch])
    const handleDelete = (id)=>{
        deleteList(id, dispatch);
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'title', width: 120 },
        { field: 'genre', headerName: 'Genre', width: 120 },
        { field: 'type', headerName: 'type', width: 120 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={{pathname:"/list/" + params.row._id,  movie: params.row }}>
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
        rows={lists}
        columns={columns}
        disableRowSelectionOnClick
        pageSize={8}
        checkboxSelection
        getRowId={(r)=>r._id}
      />
    </div>
  )
}
