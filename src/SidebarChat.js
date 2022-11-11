import {Avatar} from "@material-ui/core";
import './SidebarChat.css';

import React, {useEffect, useState} from 'react';


function SidebarChat({ addNewChat }) {
    
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);

    const createChat = () => {
        const roomName = prompt("Please Enter Name for Chat");

        if(roomName){
            // aa
        }
    };
 
    return !addNewChat? (
           <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat_info">
                    <h2>room name</h2>
                    <p>Last message</p>
                </div>
            </div>
              
    )  : (
        <div onClick={createChat} className="sidebarChat">
            <h3 className="add-new-chat-title">Add New Chat</h3>
        </div>
    )

}

export default SidebarChat