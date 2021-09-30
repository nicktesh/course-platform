import React from "react";
import MiniSearchbar from "../components/MiniSearchbar";
import profilePic from "../assets/profile-pic.jpg";

function Messages() {
  return (
    <div className="messages">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>Messages</h1>
          </div>
          <div className="col-4">
            <div className="active-messages">
              <MiniSearchbar />
              <div className="active-messages-inner">
                <div className="message-preview active">
                  <div className="message-info">
                    <img src={profilePic} alt="" />
                    <div className="message-content">
                      <h4>Name Here</h4>
                      <p>Amet minim mollil non desurent...</p>
                    </div>
                  </div>
                  <div className="message-time">
                    <p>2:43pm</p>0
                  </div>
                </div>
                <div className="message-preview">
                  <div className="message-info">
                    <img src={profilePic} alt="" />
                    <div className="message-content">
                      <h4>AnotherName Here</h4>
                      <p>Sed ut perspiciatis unde omnis...</p>
                    </div>
                  </div>
                  <div className="message-time">
                    <p>12:43pm</p>0
                  </div>
                </div>
                <div className="message-preview">
                  <div className="message-info">
                    <img src={profilePic} alt="" />
                    <div className="message-content">
                      <h4>AnotherName Here</h4>
                      <p>Sed ut perspiciatis unde omnis...</p>
                    </div>
                  </div>
                  <div className="message-time">
                    <p>12:43pm</p>0
                  </div>
                </div>
                <div className="message-preview">
                  <div className="message-info">
                    <img src={profilePic} alt="" />
                    <div className="message-content">
                      <h4>AnotherName Here</h4>
                      <p>Sed ut perspiciatis unde omnis...</p>
                    </div>
                  </div>
                  <div className="message-time">
                    <p>12:43pm</p>0
                  </div>
                </div>
                <div className="message-preview">
                  <div className="message-info">
                    <img src={profilePic} alt="" />
                    <div className="message-content">
                      <h4>AnotherName Here</h4>
                      <p>Sed ut perspiciatis unde omnis...</p>
                    </div>
                  </div>
                  <div className="message-time">
                    <p>12:43pm</p>0
                  </div>
                </div>
                <div className="message-preview">
                  <div className="message-info">
                    <img src={profilePic} alt="" />
                    <div className="message-content">
                      <h4>AnotherName Here</h4>
                      <p>Sed ut perspiciatis unde omnis...</p>
                    </div>
                  </div>
                  <div className="message-time">
                    <p>12:43pm</p>0
                  </div>
                </div>
                <div className="message-preview">
                  <div className="message-info">
                    <img src={profilePic} alt="" />
                    <div className="message-content">
                      <h4>AnotherName Here</h4>
                      <p>Sed ut perspiciatis unde omnis...</p>
                    </div>
                  </div>
                  <div className="message-time">
                    <p>12:43pm</p>0
                  </div>
                </div>
                <div className="message-preview">
                  <div className="message-info">
                    <img src={profilePic} alt="" />
                    <div className="message-content">
                      <h4>AnotherName Here</h4>
                      <p>Sed ut perspiciatis unde omnis...</p>
                    </div>
                  </div>
                  <div className="message-time">
                    <p>12:43pm</p>0
                  </div>
                </div>
                <div className="message-preview">
                  <div className="message-info">
                    <img src={profilePic} alt="" />
                    <div className="message-content">
                      <h4>AnotherName Here</h4>
                      <p>Sed ut perspiciatis unde omnis...</p>
                    </div>
                  </div>
                  <div className="message-time">
                    <p>12:43pm</p>0
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="message-box">message box here</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
