import React from "react";
import PropTypes from "prop-types";
import NearIcon from "../assets/logo-white.svg";
import Star from "../assets/star.svg";

export default function Messages({ messages }) {
  console.log(messages);
  return (
    <div className="messages">
      <h2 className="title">Messages Board</h2>
      <div>
        {messages.map((message, i) => {
          const date = new Date(Number.parseInt(messages[i].timestamp));
          const showDate = `${date.getDate()} ${date.toLocaleString("default", {
            month: "long",
          })} ${date.getFullYear()}`;
          const showTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
          return (
            <div key={i} className="message">
              {message.premium && (
                <div className="premium">
                  <img src={Star} width={80} height={80} />
                </div>
              )}
              <div>
                <div className="top-nav">
                  <div className="datetime">
                    <div>{showDate}</div>
                    <div>{showTime}</div>
                  </div>
                  <div className="icon">
                    <img src={NearIcon} width={50} height={50} />
                  </div>
                </div>
                <div className="content">
                  <div className="text">{message.text}</div>
                  <div className="sender">{message.sender}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Messages.propTypes = {
  messages: PropTypes.array,
};
