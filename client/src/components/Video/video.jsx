import React from "react";
import "./video.scss";
import views from "../../assets/Icons/Icon-views.svg";
import likes from "../../assets/Icons/Icon-likes.svg";
class Video extends React.Component {
  render() {
    return (
      <>
        <section className="video">
          <div className="video__description">
            <h1 className="video__title">{this.props.currentVideo?.title}</h1>
            <div className="video__description--info">
              <div className="video__description--left">
                <h3 className="video__channel">
                  {this.props.currentVideo?.channel}
                </h3>
                <p className="video__time">
                  {new Date(this.props.currentVideo?.timestamp).toLocaleString(
                    "en-us",
                    {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    }
                  )}
                </p>
              </div>
              <div className="video__description--right">
                <p className="video__views">
                  <img className="video__icon" alt="video icon" src={views} />
                  {this.props.currentVideo?.views}
                </p>
                <p className="video__likes">
                  <img className="video__icon" alt="video icon" src={likes} />
                  {this.props.currentVideo?.likes}
                </p>
              </div>
            </div>
            <p className="video__desc">
              {this.props.currentVideo?.description}
            </p>
          </div>
        </section>
      </>
    );
  }
}
export default Video;
