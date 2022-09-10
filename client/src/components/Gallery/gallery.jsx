import React from "react";
import "./gallery.scss";
import { Link } from "react-router-dom";

class Gallery extends React.Component {
  render() {
    return (
      <>
        <section className="gallery">
          <h2 className="gallery__header">NEXT VIDEO</h2>
          {this.props.gallery
            ?.filter((videos) => videos.id !== this.props.heroVideo)
            .map((eaVideo) => {
              return (
                <Link
                  key={eaVideo.id}
                  className="gallery__links"
                  to={`/videos/${eaVideo.id}`}
                >
                  <div
                    className="gallery__content"
                    onClick={() => this.props.setMainVideo(eaVideo.id)}
                  >
                    <div className="gallery__container--img">
                      <img
                        className="gallery__img"
                        src={eaVideo.image}
                        alt="video"
                      />
                    </div>
                    <div className="gallery__text">
                      <h3 className="gallery__title">{eaVideo.title}</h3>
                      <p className="gallery__channel">{eaVideo.channel}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </section>
      </>
    );
  }
}

export default Gallery;
