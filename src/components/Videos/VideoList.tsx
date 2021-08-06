import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IVideo } from "./Video";
import * as videoService from "./VideoService";

const VideoList = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await videoService.getVideos();
    setVideos(res.data);
  };

  return (
    <div>
      <h1>Video List</h1>

      {videos.map((video, idx) => (
        <p key={idx}>{video.title}</p>
      ))}
    </div>
  );
};

export default VideoList;
