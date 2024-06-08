import React from "react";
import { SERVER } from "../app/(home)/page";

async function getVideos(id: string) {
  const res = await fetch(`${SERVER}/${id}/videos`);
  return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const video = await getVideos(id);
  return <h1>{JSON.stringify(video)}</h1>;
}
