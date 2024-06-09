import React from "react";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  const res = await fetch(
    `${"https://nomad-movies.nomadcoders.workers.dev/movies"}/${id}`
  );
  return res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h2 className={styles.title}>{movie.title}</h2>
        <h3 className={styles.vote_average}>
          * {movie.vote_average.toFixed(1)}
        </h3>
        <p className={styles.overview}>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
