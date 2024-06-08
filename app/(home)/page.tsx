import React, { useEffect, useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const SERVER = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  const res = await fetch(SERVER);
  const json = await res.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
