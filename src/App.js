import './App.css';
// import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
// import Login from './Login';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {useStateValue} from './StateProvider';

function App() {
  // const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
          <div className="app_body">
             <Sidebar/>
             <Chat />
          </div>
        
        
    </div>
  );
}

export default App;