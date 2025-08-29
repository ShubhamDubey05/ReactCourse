import React from 'react'
import './Sidebar.css'
import { TiThMenu } from "react-icons/ti";
import { FaPlus, FaHistory } from "react-icons/fa";
import { IoChatboxSharp, IoSettings } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <TiThMenu className='menu-icon'/>
        <div className="new-chat">
           <p>New Chat</p>
          <FaPlus className='icon' />
         
        </div>

        <div className="recent">
          <p className="title">Recent</p>
          <div className="recent-chat">
            <IoChatboxSharp  className='icon'/>
            <p>What is React...</p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-item">
          <IoMdHelpCircle className='icon'/>
          <p>Help</p>
        </div>
        <div className="bottom-item">
          <FaHistory className='icon'/>
          <p>History</p>
        </div>
        <div className="bottom-item">
          <IoSettings className='icon'/>
          <p>Settings</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
