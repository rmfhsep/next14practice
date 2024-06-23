import React, { Suspense } from "react";
import MovieVideos from "../../../../components/movie-videos";
import MovieInfo, { getMovie } from "../../../../components/movie-info";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  console.log("generateMetadata");
  const res = await getMovie(id);
  return {
    title: res.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <div>여기는 영화 정보를 보여주는 페이지 입니다요</div>
      <div>여기는 영화 정보를 보여주는 페이지 입니다요</div>
      <div>여기는 영화 정보를 보여주는 페이지 입니다요</div>
      <Suspense fallback={<h1>loading movie indo</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
