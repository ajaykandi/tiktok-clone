import React, { useRef, useState } from "react";
import "./Vedio.css";
import VedioFooter from "./VedioFooter";
import Vediosidebar from "./Vediosidebar";

function Vedio({ url, channel, descreption, song, likes, comments, shares }) {
  const vedioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const onvediopress = () => {
    console.log("working clicked");
    if (playing) {
      vedioRef.current.pause();
      setPlaying(false);
    } else {
      vedioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="vedio">
      <video
        className="vedio__player"
        loop
        ref={vedioRef}
        onClick={onvediopress}
        src={url}
      ></video>
      <VedioFooter channel={channel} descreption={descreption} song={song} />
      <Vediosidebar likes={likes} comments={comments} shares={shares} />
    </div>
  );
}

export default Vedio;
