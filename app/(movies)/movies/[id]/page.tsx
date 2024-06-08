import React, { Suspense } from "react";
import MovieVideos from "../../../../components/movie-videos";
import MovieInfo from "../../../../components/movie-info";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h3>Movie Detail Page</h3>
      <Suspense fallback={<h1>loading movie indo</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
