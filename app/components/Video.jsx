import React from "react";

const Video = ({ source }) => {
  return (
    <video src={source} autoPlay={true} className="rounded-xl shadow-2xl">
      {/* <source src="" /> */}
    </video>
  );
};

export default Video;
