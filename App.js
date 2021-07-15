import React, { useEffect, useState } from 'react';
import './index.css';
import Head from './Head';

const App=()=>{
    const API="https://image.tmdb.org/t/p/w1280"
    const mu="https://www.themoviedb.org/movie/"
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
    <Head/>  
    {
        
        movies.map((elm)=>{
            return(
                <div className="movie-container">
                <div className="movie">
                
                <a href="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"><button className="button">Click to See Preview,hover to Overview & click image to hop to the page</button></a>
                  <a href={mu + elm.id}><img src= {API + elm.poster_path} alt={elm.title}  /></a>
                   
                <div className="movie-info">
                    <h3>{elm.title}</h3>
                    
                    <p> Rate: <br/><span>{elm.vote_average}</span></p>
                   
                </div>
                
                <div className="movie-over">
                    <h2><b>Overview:</b></h2>
                  
                    <p>{elm.overview}</p>
                    
                </div>
                </div>
                </div>
            )
            
        })
    }
    
</>
)
}

export default App