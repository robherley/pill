import React, { Component } from "react";
import ReactPlayer from "react-player";
import styled from 'styled-components';
import { connect } from "react-redux";

import { Box, PlayIcon, PauseIcon, FastForwardIcon, RewindIcon, VolumeIcon } from 'grommet';

const FlexRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 25px;
    margin: 0px 40px;
`

const Input = styled.input`
    padding-left: 20px;
`

class Left extends Component {
  render() {
    return (
      <div>
         <ReactPlayer
          url="https://www.youtube.com/watch?v=aslv5uf8WfY&list=PLiWEGBoM5mExxz8Ag8S_U0bNXU6fiXI2z&index=1"
          playing
          preload
          width={320}
          height={180}
          volume={0}
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            pointerEvents: "none"
          }}
        /> 
        <FlexRow>   
            <RewindIcon />
            <PauseIcon size="large" />
            {/* <PlayIcon size="large" /> */}
            <FastForwardIcon />
        </FlexRow>
        <Box direction="row" justify="between" pad="medium">
            <VolumeIcon size="small" />
            <Input type="range" />
        </Box>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps, null)(Left);
