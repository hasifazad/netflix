import Axios from '../../Axios'
import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { API_KEY } from '../../Constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [state, setState] = useState([])
  const [trailer,setTrailer]=useState('')

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }

  useEffect(() => {
    Axios.get(`trending/all/day?api_key=${API_KEY}`).then((response) => {
      setState(response.data.results)
    })
  }, [])

  const handleMovieTrailer=(id)=>{
    Axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setTrailer(response.data.results[0])
      }
      
    })
  }

  return (
    <div>
      <h2 className='postertitle'>{props.postertitle}</h2>
      <div className="section">

        {
          state.map((obj) =>
            <img onClick={()=>handleMovieTrailer(obj.id)} className='posters' src={obj ? props.url + `${obj.backdrop_path}` : ''} alt="" />
          )
        }
      </div>
      {trailer && <YouTube videoId={trailer.key} opts={opts}/>}
    </div>

  )
}

export default RowPost