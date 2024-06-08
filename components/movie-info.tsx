import React from "react";
import { SERVER } from "../app/(home)/page";

async function getMovie(id: string) {
  const res = await fetch(`${SERVER}/${id}`);
  return res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h2>{JSON.stringify(movie)}</h2>;
}
