import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import CreateNewTemplate from "./Containers/createContainer";
import { connect } from 'react-redux';
import CreateList from './Containers/mainContainer';
import { tempDisplay, tempIndex } from './Actions/Action';
import { BrowserRouter, Link, Route } from 'react-router-dom';


const sendData = (dispatch) => ({
  dispTemp: (displayTemplate) => {
    dispatch(tempDisplay(displayTemplate));
  },
  indexTemp: (frameIndex) => {
    dispatch(tempIndex(frameIndex));
  },
})

const reciveData = (state) => ({
  state: state,
})
function App(props) {
  return (
    <div>

      <BrowserRouter>
        <div style={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" style={{ marginRight: 2 }} aria-label="menu">
              </IconButton>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                Task Manegement
              </Typography>
              {props.state.CreateTemplates.displayTemplate === true && <Link to='/' style={{ textDecoration: 'none' }}><Button style={{ color: '#fff' }} onClick={() => props.dispTemp(false)}>Home</Button></Link>}
            </Toolbar>
          </AppBar>
        </div>
        <Route exact path='/' component={CreateNewTemplate} ></Route>
        <Route path='/ListItems' component={CreateList} ></Route>
      </BrowserRouter>

    </div>
  );
}

export default connect(reciveData, sendData)(App);
