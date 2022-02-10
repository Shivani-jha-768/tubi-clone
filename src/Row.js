import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import RowCard from "./RowCard"
import ScrollContainer from "react-indiana-drag-scroll";


const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  
  
  return (
    <div className="row">
      <h2>{title}</h2>
      <ScrollContainer className="row__posters">
        {/* <div className="row__posters"> */}
        {movies.map((movie) => (
         
          <RowCard  isLargeRow  base_url = {base_url} movie = {movie}/>
          
        ))}
        
        {/* </div> */}
      </ScrollContainer>
      
    </div>
  );
}

export default Row;
