import {  deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess} from "./ListActions"
import axios from "axios";

export const getLists = async (dispatch)=>{
    dispatch(getListsStart());

    try {
       const res = await axios.get("http://localhost:8800/api/lists", {
        headers:{
            token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken
        },
    });
    dispatch(getListsSuccess(res.data))
    } catch (error) {
        dispatch(getListsFailure());
    }
}


// export const createMovies = async (movie, dispatch)=>{
//     dispatch(createMovieStart);
    
//     try {
//        const res = await axios.post("http://localhost:8800/api/movies",movie, {
//         headers:{
//             token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken
//         },
//     });
//     dispatch(createMovieSuccess(res.data))
//     } catch (error) {
//         dispatch(createMovieFailure())
//     }
// }


export const deleteList = async (id, dispatch)=>{
    dispatch(deleteListStart);
    
    try {
       await axios.delete("http://localhost:8800/api/lists/"+id, {
        headers:{
            token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken
        },
    });
    dispatch(deleteListSuccess(id))
    } catch (error) {
        dispatch(deleteListFailure())
    }
}

