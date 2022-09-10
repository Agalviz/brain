import React, { Component } from "react";
import VideoPlayer from "../components/Video-player/video-player.jsx";
import Comments from "../components/Comments/comments.jsx";
import Video from "../components/Video/video.jsx";
import Gallery from "../components/Gallery/gallery.jsx";
import axios from "axios";

class Home extends React.Component {
  url = "/api/videos";

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentVideo?.id !== this.props.currentVideo?.id &&
      this.props.match.params.id
    ) {
      axios
        .get(`${this.url}/${this.props.match.params.id}`)
        .then((response) => {
          this.props.handleUpdate(response.data);
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    return (
      <>
        <div className="App">
          <div className="container">
            <div className="container__one">
              <VideoPlayer currentVideo={this.props.currentVideo} />
            </div>
            <div className="container__all">
              <div className="container__two">
                <Video currentVideo={this.props.currentVideo} />
                <Comments comments={this.props.currentVideo?.comments} />
              </div>
              <div className="container__gallery">
                <Gallery
                  setMainVideo={this.props.setMainVideo}
                  heroVideo={this.props.currentVideo?.id}
                  gallery={this.props.allVideos}
                  currentVideo={this.props.currentVideo}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
