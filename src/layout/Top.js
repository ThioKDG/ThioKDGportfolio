import React from "react";


import "./layStyles/layTops.scss";

function Top(props) {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="introTop">
      <h2 className="topTit">frontend</h2>
      <video
        className="topVideo"
        src={path + `/image/main/walk.mp4`}
        muted
        autoPlay
        loop
        playsInline
      ></video>
    </section>
  );
}

export default Top;
