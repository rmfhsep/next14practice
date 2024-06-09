import React from "react";
import { SERVER } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  const res = await fetch(`${SERVER}/${id}/videos`);
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
