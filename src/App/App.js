import React, { Component } from 'react'
import EntryForm  from "../components/others/EntryFrom";
// import AppBar from './components/material-component/AppBar';
// or
import { Drawer } from '@material-ui/core';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AppBar/> */}
        <Drawer/>
        <h1>Hello from our first react app...</h1>

        <EntryForm/>
      </div>
    )
  }
}


