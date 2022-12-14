// import React, {useState,useEffect} from 'react';
import './Sidebar.css';
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
// import db from './firebase';


function Sidebar() {

    // const [rooms, setRooms] = useState([]);
    // useEffect(() => {
    //    db.collection('rooms').onSnapshot(snapshot => (
    //         setRooms(snapshot.docs.map(doc => (
    //             {
    //                 id: doc.id,
    //                 data: doc.data()
    //             }
    //         )

    //         ))
    //     )); },[]);
            
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <IconButton>
                <Avatar src="https://avatars.dicebear.com/api/adventurer-neutral/your-custom-seed.svg"/>
                </IconButton>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat/>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                
            </div>
        </div>
    );
}

export default Sidebar;