import React from "react";
import styles from "../styles/movie-videos.module.css";
import { API_SERVER } from "../app/constants";

async function getVideos(id: string) {
  const res = await fetch(`${API_SERVER}/${id}/videos`);
  return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const video = await getVideos(id);
  return (
    <div className={styles.container}>
      {video.map((video) => (
        <iframe
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
        ></iframe>
      ))}
    </div>
  );
}
