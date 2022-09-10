import React from "react";
import "./comments.scss";

class Comments extends React.Component {
  render() {
    return (
      <>
        <section className="comments">
          <h3 className="comments__qty">3 comments</h3>
          <form className="comments__form">
            <div className="comments__avatar--form"></div>
            <div className="comments__form--complete">
              <label className="comments__header">JOIN THE CONVERSATION</label>
              <div className="comments__form--info">
                <textarea
                  className="comments__text"
                  type="text"
                  name="text"
                  placeholder="Add comment"
                />
                <input
                  type="submit"
                  name="button"
                  value="COMMENT"
                  className="comments__button"
                />
              </div>
            </div>
          </form>
          <section className="comments__all">
            {this.props.comments?.map((eaComment) => {
              return (
                <div className="comments__section">
                  <div className="comments__avatar"></div>
                  <div className="comments__info">
                    <div className="comments__name">
                      <p className="comments__name--name">{eaComment.name}</p>
                      <p className="comments__date">
                        {new Date(eaComment.timestamp).toLocaleString("en-us", {
                          day: "numeric",
                          month: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <p>{eaComment.comment}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
      </>
    );
  }
}
export default Comments;
