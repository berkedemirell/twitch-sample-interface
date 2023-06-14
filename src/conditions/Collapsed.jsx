import React from "react";
import { follows, recomms } from "../data/data";
import { Link } from "react-router-dom";

export const Collapsed = (props) => {
  return (
    <div className="collapsed">
      <div className="collapsed-container">
        {/* <button onClick={props.handleCollapse}><ion-icon name="arrow-forward-outline"></ion-icon></button> */}
        <div className="collapsed-inner">
          <div className="collapse-header">
            <button className="collapse-expand" onClick={props.handleCollapse} title="Genişlet">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
            <span className="collapse-follow" title="Takip Edilenler">
              <ion-icon name="heart-outline"></ion-icon>
            </span>
          </div>
          <div className="collapse-followings">
            <ul className="lists-collapse">
              {follows.map((channel) => {
                return (
                  <li>
                    <Link className="list-collapse">
                      <img className="collapsed-img" src={channel.img} alt="" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="recomms-collapse">
          <div className="recomms-icon" title="Önerilenler">
            <ion-icon name="videocam-outline"></ion-icon>
          </div>
          <div className="collapse-followings">
            <ul className="lists-collapse">
              {recomms.map((channel) => {
                return (
                  <li>
                    <Link className="list-collapse">
                      <img className="collapsed-img" src={channel.img} alt="" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsed;
