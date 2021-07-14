import React, { useEffect, useState } from 'react';
import './index.css';

const App=()=>{
    const API="https://image.tmdb.org/t/p/w1280"
    const [movies,setMovies]= useState([]);
    const getUsers= async()=>{
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1');
        const data = await res.json();
        setMovies(data.results);
        console.log(data);
    }
    useEffect(()=>{
        getUsers();
    },[]);
return(
<>
    {
        
        movies.map((elm)=>{
            return(
                
                <div className="movie">
                
                <a href="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"><button className="button">Click here See Preview & hover to Overview</button></a>
                    <img src= {API + elm.poster_path} alt={elm.title}/>
                   
                <div className="movie-info">
                    <h3>{elm.title}</h3>
                    
                    <p> <span>{elm.vote_average}</span></p>
                   
                </div>
                
                <div className="movie-over">
                    <h2><b>Overview:</b></h2>
                    <p>{elm.overview}</p>
                    
                </div>
                </div>
                
            )
            
        })
    }
</>
)
}

export default App