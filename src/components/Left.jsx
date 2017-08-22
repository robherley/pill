import React, { Component } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { connect } from "react-redux";
import { changeVolume, changeVideoIndex, pausePlay } from '../actions/';

import {
  Box,
  PlayIcon,
  PauseIcon,
  FastForwardIcon,
  RewindIcon,
  VolumeIcon,
  VolumeLowIcon,
  VolumeMuteIcon
} from "grommet";

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 25px;
  margin: 0px 40px;
`;

const Input = styled.input`
  padding-left: 20px;
`;

class Left extends Component {
  getSafeID(newID){
    if(newID < 0){
      this.props.changeVideoIndex(this.props.playlist.items.length - 1)
    }
    else if(newID > this.props.playlist.items.length){
      this.props.changeVideoIndex(0)
    }
    else{
      this.props.changeVideoIndex(newID)
    }
  }

  getVolumeIcon(){
    const vol = parseFloat(this.props.volume);
    if(vol === 0){
      return <VolumeMuteIcon size='small' />
    }
    else if(vol < 0.6){
      return <VolumeLowIcon size='small' />
    }
    else {
      return <VolumeIcon size='small' />
    }
  }

  render() {
    const YT_VIDEO_ID = this.props.playlist.items[this.props.video.index].snippet.resourceId.videoId;
    return (
      <div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${YT_VIDEO_ID}`}
          playing={this.props.video.playing}
          preload
          width={320}
          height={180}
          onEnded={() => this.getSafeID(this.props.video.index + 1)}
          volume={parseFloat(this.props.volume)}
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            pointerEvents: "none"
          }}
        />
        <FlexRow>
          <RewindIcon onClick={() => this.getSafeID(this.props.video.index - 1)}/>
          {this.props.video.playing? 
            <PauseIcon size="large" onClick={() => this.props.pausePlay()}/> : 
            <PlayIcon size="large" onClick={() => this.props.pausePlay()}/>}
          <FastForwardIcon onClick={() => this.getSafeID(this.props.video.index + 1)}/>
        </FlexRow>
        <Box direction="row" justify="between" pad="medium">
          {this.getVolumeIcon()}
          <Input type="range" min='0' max='1' step='0.1' value={this.props.volume} onChange={e => this.props.changeVolume(e.target.value)} />
        </Box>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playlist: state.playlist,
  video: state.video,
  volume: state.volume
});

export default connect(mapStateToProps, { changeVolume, changeVideoIndex, pausePlay })(Left);
