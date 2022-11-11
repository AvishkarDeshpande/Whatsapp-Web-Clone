import React, {useState,useEffect} from 'react';
import {Avatar, IconButton} from '@material-ui/core';
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './Chat.css';
// import { useParams } from 'react-router-dom';
// import db from './firebase';
// import firebase from 'firebase';
// import {useStateValue} from "./StateProvider";

function Chat() {
    // const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    // const {roomId} = useParams();
    // const [roomName, setRoomName] = useState("");
    // const [messages, setMessages] = useState([]);
    // const [{user}, dispatch] = useStateValue();

    // useEffect(()=>{
    //     if(roomId){
    //         db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
    //             setRoomName(snapshot.data().name);
    //         });

    //         db.collection('rooms').doc(roomId).collection("messages").orderBy("timestamp","asc").onSnapshot(snapshot => {
    //             setMessages(snapshot.docs.map(doc => doc.data()))
    //         });

    //     }
    // },[roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);

    // const sendMessage = (e) => {
    //     e.preventDefault();
    //     db.collection('rooms').doc(roomId).collection('messages').add({
    //         message: input,
    //         name: user.displayName,
    //         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //     })

    //     setInput("");
    // }

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className='chat_headerInfo'>
                    <h3 className='chat-room-name'>roomName</h3>
                    <p className='chat-room-last-seen'>
                       Last seen at 3.78pm
                    </p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                    
                </div>
            </div>
            <div className="chat_body">
                <p className={`chat_message ${ true && 'chat_receiver'}`}>
                        <span className="chat_name">Mike</span>
                        Hi!!
                        <span className="chat_timestemp">4.36pm</span>
                    </p>
                <p className={`chat_message ${ true && 'chat_receiver'}`}>
                        <span className="chat_name">Mike</span>
                        Hello!!
                        <span className="chat_timestemp">4.36pm</span>
                    </p>
                <p className={`chat_message ${ true && 'chat_receiver'}`}>
                        <span className="chat_name">Mike</span>
                        How are you
                        <span className="chat_timestemp">4.36pm</span>
                    </p>
                
            </div>
            <div className='chat_footer'>
                <InsertEmoticonIcon />
                <form>
                    <input type="text" placeholder="Type a message"/>
                    <button type="submit"> Send a Message</button>
                </form>
                <MicIcon/>
            </div>
            
        </div>
    )
}

export default Chat