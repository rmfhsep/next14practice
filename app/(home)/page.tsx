import React, { useEffect, useState } from "react";
import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export const API_SERVER = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  const res = await fetch(
    "https://nomad-movies.nomadcoders.workers.dev/movies"
  );
  const json = await res.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          id={movie.id}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
