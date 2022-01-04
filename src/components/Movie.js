import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({id,coverImg , title , summary , genres}) {
    return (
        <div className={styles.container}>
            <img src={coverImg} alt="" className={styles.poster}></img>
                <h2 className={styles.moive_title}><Link to={`/movie/${id}`}>{title}</Link></h2>
                <p className={styles.sum}>{summary.slice(0,100)}</p>
                <ul>
                    {genres && genres.map((genre)=> (
                        <li key={genre} className={styles.gen}>{genre}</li>
                    ))}
                </ul>
        </div>
    );
}
Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired , 
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired , 
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;