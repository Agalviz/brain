import React from "react";
import "./video-upload.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";

class VideoUpload extends React.Component {
  state = {
    redirect: false,
    title: " ",
    description: " ",
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };
  handleHome = () => {
    axios
      .get(`/api/videos/${this.state.allVideos[0]?.id}`)
      .then((res) => this.setState({ currentVideo: res.data }));

    this.props.history.push("/");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/videos", {
      title: this.state.title,
      description: this.state.description,
    });
    alert("uploaded");
    this.setRedirect();
  };

  handleTitle = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  };
  handleDescription = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  };
  render() {
    return (
      <>
        <div className="video-upload">
          <h1 className="form__header">Upload Video:</h1>
          <div className="upload__divider"></div>
          <form className="upload" onSubmit={this.handleSubmit}>
            <div className="upload__all">
              <div className="upload__video">
                <label className="upload__label">VIDEO THUMBNAIL </label>
                <img
                  className="upload__thumb"
                  src={thumbnail}
                  alt="video upload"
                />
              </div>
              <div className="upload__info">
                <label className="upload__label upload__label--2">
                  TITLE YOUR VIDEO
                </label>
                <input
                  onChange={this.handleTitle}
                  className="upload__title"
                  type="text"
                  name="title"
                  value={this.state.title}
                  placeholder="Add a title to your video"
                />
                <label className="upload__label upload__label--3">
                  ADD A VIDEO DESCRIPTION
                </label>
                <textarea
                  onChange={this.handleDescription}
                  className="upload__description"
                  type="textarea"
                  name="description"
                  value={this.state.description}
                  placeholder="Add a description to your video"
                />
              </div>
            </div>
            <div className="upload__divider"></div>
            <div className="upload__buttons">
              {this.renderRedirect()}
              <button
                className="upload__publish"
                type="submit"
                value="PUBLISH"
                name="publish"
              >
                PUBLISH
              </button>

              <input
                className="upload__cancel"
                type="submit"
                value="CANCEL"
                name="cancel"
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default withRouter(VideoUpload);
