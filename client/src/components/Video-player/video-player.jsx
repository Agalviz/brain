import React from "react";
import "./video-player.scss";

class VideoPlayer extends React.Component {
  render() {
    return (
      <>
        <section className="video">
          <video
            className="current-video"
            controls="controls"
            poster={this.props.currentVideo.image}
          ></video>
        </section>
      </>
    );
  }
}
export default VideoPlayer;
