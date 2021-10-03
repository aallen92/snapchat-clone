import React, { useEffect } from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Preview from './Preview';
import Chat from './Chat';
import ChatView from './ChatView';
import Login from './Login';
import Account from './Account';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from './features/appSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        }))
      } else {
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <div className="app">
      <Router>
      {!user ? (
        <>
          <div className='app__body'>
            <Login />
          </div>
        </>
      ) : (
        <>
        <div className='app__body'>
          <div className='app__bodyBackground'>
          <Switch>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
            <Route exact path ="/account">
              <Account />
            </Route>
            <Route exact path="/chats">
              <Chat />
            </Route>
            <Route path="/chats/view">
              <ChatView />
            </Route >
            <Route path="/preview">
              <Preview />
            </Route>
          </Switch>
          </div>
        </div>
        </>
        )}
      </Router>
    </div>
  );
}

export default App;
