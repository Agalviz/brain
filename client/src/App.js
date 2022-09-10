import "./App.scss";
import Header from "./components/Header/header.jsx";
import React from "react";
import VideoUpload from "./components/Video-upload/video-upload";
import Home from "./pages/Home";
import axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    currentVideo: {},
    allVideos: [],
  };

  url = "/api/videos";
  setMainVideo = (videoId) => {
    let selectedVideo = this.state.allVideos.find(
      (video) => video.id === videoId
    );
    this.setState({ currentVideo: selectedVideo });
  };
  componentDidMount() {
    axios.get(`${this.url}/1af0jruup5gu`).then((response) => {
      this.setState({ currentVideo: response.data });
    });
    axios.get(`${this.url}`).then((response) => {
      this.setState({ allVideos: response.data });
    });
  }

  handleUpdate = (video) => {
    this.setState({ currentVideo: video });
  };

  handleHome = () => {
    console.log("hit");
    axios
      .get(`/api/videos/${this.state.allVideos[0]?.id}`)
      .then((res) => this.setState({ currentVideo: res.data }));
  };
  render() {
    return (
      <>
        <Router>
          <Header handleHome={this.handleHome} />
          <Switch>
            <Route
              exact
              path="/"
              render={(routeProps) => (
                <Home
                  {...routeProps}
                  allVideos={this.state.allVideos}
                  currentVideo={this.state.currentVideo}
                  setMainVideo={this.setMainVideo}
                  handleUpdate={this.handleUpdate}
                />
              )}
            />
            <Route path="/upload" component={VideoUpload} />
            <Route
              path="/videos/:id"
              render={(routeProps) => (
                <Home
                  {...routeProps}
                  allVideos={this.state.allVideos}
                  currentVideo={this.state.currentVideo}
                  setMainVideo={this.setMainVideo}
                  handleUpdate={this.handleUpdate}
                />
              )}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
