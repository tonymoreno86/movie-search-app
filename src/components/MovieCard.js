import React from 'react' 

function MovieCard(props) {
    return (
        <div className="card">
        <img className="card--image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.data.poster_path}`}
            alt={props.data.title + ' poster'}
            />
        <div className="card-content">
            <h3 className="card--title">{props.data.title}</h3>
            <p><small>RELASE DATE: {props.data.release_date}</small></p>
            <p><small>RATING: {props.data.vote_count}</small></p>
            <p className="card--desc">{props.data.overview}</p>
        </div>
    </div>
    )
}

export default MovieCard