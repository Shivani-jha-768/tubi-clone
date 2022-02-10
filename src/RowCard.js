import React from 'react'
import './RowCard.css'
function RowCard({ base_url, movie, isLargeRow}) {
  return (
    
        <div>
            <img
                
                className="row__posters row__posterLarge" //use && if theres no else or : otherwise use ?
                src={`${base_url}${
                {isLargeRow} ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
            />
            
            
             <div className="button"><img src="http://cdn1.iconfinder.com/data/icons/flavour/button_play_blue.png" alt = "Play"/> </div>
             <h5 style={{paddingLeft:"10px"}}>{movie?.name || movie?.title || movie?.orginal_name}</h5>
             <h6 style={{paddingLeft:"10px"}}>Action</h6>

        </div>
  
  )
}

export default RowCard