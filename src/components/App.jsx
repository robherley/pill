import React, { Component } from "react";
import { Split, Box } from "grommet";
import styled from "styled-components";
import { connect } from "react-redux";

import Left from "./Left";
import Right from "./Right";
import { fetchPlaylist } from "../actions/";

const DragBar = styled.div`
  position: absolute;
  height: 25px;
  width: 100%;
  margin-bottom: 25px;
  -webkit-app-region: drag;
  z-index: 2;
`;

class App extends Component {
  componentWillMount() {
    this.props.fetchPlaylist("PLiWEGBoM5mExxz8Ag8S_U0bNXU6fiXI2z");
  }

  render() {
    return this.props.playlist.items
      ? <div>
          <DragBar />
          <Split>
            <Box full colorIndex="neutral-4" justify="center" align="center">
              <Left />
            </Box>
            <Box full colorIndex="grey-3">
              <Right />
            </Box>
          </Split>
        </div>
      : <p>Hello, friend.</p>;
  }
}

const mapStateToProps = state => ({
  playlist: state.playlist
});

export default connect(mapStateToProps, { fetchPlaylist })(App);
