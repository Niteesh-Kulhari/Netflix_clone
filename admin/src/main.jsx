import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/authContext/AuthContex.jsx'
import { MovieContextProvider } from './context/movieContext/MovieContext.jsx'
import { ListContextProvider } from './context/listContext/ListContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <AuthContextProvider >
        <MovieContextProvider>
            <ListContextProvider>
                <App />
            </ListContextProvider>
        </MovieContextProvider>
    </AuthContextProvider>
    
)
