import React, { useState } from "react";
import { Link } from "react-router-dom";
import { follows, recomms } from "../data/data.js";
import Collapsed from "../conditions/Collapsed.jsx";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  const newFollows = follows.map((follow) => follow);
  const filtered = newFollows.sort((f1, f2) => f2.viewers - f1.viewers);

  const handleCollapse = (e) => {
    e.preventDefault();
    setIsCollapsed(!isCollapsed);
  };
  const handleSort = (e) => {
    e.preventDefault();
    setIsFiltered(!isFiltered);
  };

  return (
    <div className="side-bar-main">
      {!isCollapsed ? (
        <div className="side-container">
          <div className="side-bar">
            <div className="side-header">
              <h1 className="">Size Özel</h1>
              <span>
                <Link
                  className="narrow"
                  onClick={handleCollapse}
                  title="Daralt"
                >
                  <ion-icon name="arrow-back-circle-outline"></ion-icon>
                </Link>
              </span>
            </div>
            <button className="following" onClick={handleSort}>
              <div className="following-div">
                <h2>Takip Edilen Kanallar</h2>
                <span className="channel-filter">
                  <ion-icon name="repeat-outline"></ion-icon>
                </span>
              </div>
                {isFiltered && (
                  <span className="filtered-span">İzleyici (çoktan aza)</span>
                )}
            </button>
            <div className="following-channels">
              <ul className="lists-channel">
                {(!isFiltered ? follows : filtered).map((channel,i) => {
                  return (
                    <li className="outer-list-channel" key={i}>
                      <Link className="list-channel">
                        <img className="channel-img" src={channel.img} alt="" />
                        <div className="channel-info">
                          <p className="channel-title">{channel.user}</p>
                          <p className="channel-game">{channel.game}</p>
                        </div>
                        <div className="viewer-container">
                          <div className="red-circle"></div>
                          <span>{channel.viewers}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="recomms">
            <div className="recomms-header">
              <h1>Sizin için önerilenler</h1>
            </div>
            <div className="recomms-channels">
              <ul className="lists-channel">
                {recomms.map((channel, i) => {
                  return (
                    <li className="outer-list-channel" key={i}>
                      <Link className="list-channel">
                        <img className="channel-img" src={channel.img} alt="" />
                        <div className="channel-info">
                          <p className="channel-title">{channel.user}</p>
                          <p className="channel-game">{channel.game}</p>
                        </div>
                        <div className="viewer-container">
                          <div className="red-circle"></div>
                          <span>{channel.viewers}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Collapsed handleCollapse={handleCollapse} isCollapsed={isCollapsed} />
      )}
    </div>
  );
};

export default Sidebar;
