import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions"
import axios from "axios";

export const getMovies = async (dispatch)=>{
    dispatch(getMoviesStart());

    try {
       const res = await axios.get("http://localhost:8800/api/movies", {
        headers:{
            token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken
        },
    });
    dispatch(getMoviesSuccess(res.data))
    } catch (error) {
        dispatch(getMoviesFailure())
    }
}


export const createMovies = async (movie, dispatch)=>{
    dispatch(createMovieStart);
    
    try {
       const res = await axios.post("http://localhost:8800/api/movies",movie, {
        headers:{
            token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken
        },
    });
    dispatch(createMovieSuccess(res.data))
    } catch (error) {
        dispatch(createMovieFailure())
    }
}


export const deleteMovies = async (id, dispatch)=>{
    dispatch(deleteMovieStart);
    
    try {
       await axios.delete("http://localhost:8800/api/movies/"+id, {
        headers:{
            token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken
        },
    });
    dispatch(deleteMovieSuccess(id))
    } catch (error) {
        dispatch(deleteMovieFailure())
    }
}

