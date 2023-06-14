import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { messages } from "../data/messages.js";
import CollapsedChat from "./CollapsedChat";

export const Chatbar = () => {
  const [collapseChat, setCollapseChat] = useState(false);
  const [timer, setTimer] = useState(0);
  const [newArr, setNewArr] = useState([])

  const handleCollapse = (e) => {
    e.preventDefault();
    setCollapseChat(!collapseChat);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
        if(timer < messages.length) {
          setTimer((prev) => prev + 1)
          setNewArr([...newArr, messages[timer]])
        } else {
          return 
        }
      }, 2000)

    return () => clearInterval(interval)
  },[timer,newArr]);


  return !collapseChat ? (
    <div className="chat">
      <div className="chat-side">
        <div className="chat-header">
          <Link className="chat-close" onClick={handleCollapse}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </Link>
          <p className="yayın-sohbeti">Yayın Sohbeti</p>
          <Link>
            <ion-icon name="accessibility-outline"></ion-icon>
          </Link>
        </div>
        <div className="chat-body">
          {newArr?.map((message, i) => {
            return (
              <div className="chat-message" key={i}>
                <div className="user-badges">
                  <div className="badges">
                    {message?.badges[0]}
                    {message?.badges[1]}
                  </div>
                  <div className="message-div">
                    <p
                      className="message-name"
                      style={{ color: message?.color }}
                    >
                      {message?.username}:{" "}
                      <span className="user-message">{message?.message}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="input-message">
        <input type="text" className="input" placeholder="Share a message" />
        <button className="submit-message">Gönder</button>
      </div>
      <div className="chat-bottom">
        <div className="chat-müdavim">
          <ion-icon name="baseball-outline"></ion-icon>
          <span className="müdavim">100B</span>
        </div>
        <ion-icon name="settings-outline"></ion-icon>
      </div>
    </div>
  ) : (
    <CollapsedChat
      collapseChat={collapseChat}
      handleCollapse={handleCollapse}
      setCollapseChat={setCollapseChat}
    />
  );
};

export default Chatbar;
