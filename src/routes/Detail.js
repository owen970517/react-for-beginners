import { useParams  } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import styles from "./Detail.module.css";
function Detail() {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async() => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie)
      }
    useEffect(()=> {
        getMovie() } ,[] )
    return (
        <div className={styles.container}>
             <h1>영화상세</h1>
             <img src={movie.large_cover_image}></img>
             <h1>제목 : {movie.title}</h1>
             <h2>개봉 : {movie.year}년</h2>
             <h3>평점 : {movie.rating}</h3>
             <h3>상영길이 : {movie.runtime}분</h3>
             <h3>장르</h3>
             <ul>
                { movie.genres && movie.genres.map((genre)=> (
                    <li key={genre} className={styles.genre}>{genre}</li>
                    ))}
                </ul>
             <h3>다운로드 횟수 : {movie.download_count}번</h3>
             <h3>좋아요 : {movie.like_count}개</h3>
             <p> 소개 <br/>{movie.description_full}</p>
        </div>
    )
}
export default Detail;