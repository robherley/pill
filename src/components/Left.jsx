import React, { Component } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { Textfit } from "react-textfit";
import { connect } from "react-redux";
import { changeVolume, changeVideoIndex, pausePlay } from "../actions/";

import {
  Box,
  Button,
  PlayIcon,
  PauseIcon,
  FormPreviousIcon,
  FormNextIcon,
  VolumeIcon,
  VolumeLowIcon,
  VolumeMuteIcon
} from "grommet";

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0px 40px;
`;

const StyledBox = styled(Box)`
  width: 350px;
  padding: 3px;
  margin: 5px;
  text-align: center;
`;

const Input = styled.input`padding-left: 20px;`;

class Left extends Component {
  getSafeID(newID) {
    if (newID < 0) {
      this.props.changeVideoIndex(this.props.playlist.items.length - 1);
    } else if (newID > this.props.playlist.items.length) {
      this.props.changeVideoIndex(0);
    } else {
      this.props.changeVideoIndex(newID);
    }
  }

  getVolumeIcon() {
    const vol = parseFloat(this.props.volume);
    if (vol === 0) {
      return <VolumeMuteIcon size="small" />;
    } else if (vol < 0.5) {
      return <VolumeLowIcon size="small" />;
    } else {
      return <VolumeIcon size="small" />;
    }
  }

  render() {
    const YT_VIDEO_ID = this.props.playlist.items[this.props.video.index]
      .snippet.resourceId.videoId;
    const vidInfo = this.props.playlist.items[this.props.video.index].snippet;
    console.log(vidInfo);
    return (
      <div>
        <FlexRow>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${YT_VIDEO_ID}`}
            playing={this.props.video.playing}
            preload
            width={320}
            height={180}
            onEnded={() => this.getSafeID(this.props.video.index + 1)}
            volume={parseFloat(this.props.volume)}
            style={{
              marginTop: "40px",
              borderRadius: "10px",
              overflow: "hidden",
              pointerEvents: "none"
            }}
          />
        </FlexRow>
        <FlexRow>
          <StyledBox >
            <Textfit mode="multi" style={{opacity: '0.7'}}>
              {vidInfo.title}
            </Textfit>
          </StyledBox>
        </FlexRow>
        <FlexRow>
          <Button
            plain
            icon={<FormPreviousIcon size="large" />}
            onClick={() => this.getSafeID(this.props.video.index - 1)}
          />
          <Button
            plain
            icon={this.props.video.playing? <PauseIcon size="large" /> : <PlayIcon size="large" />}
            onClick={() => this.props.pausePlay()}
          />
          <Button
            plain
            icon={<FormNextIcon size="large" />}
            onClick={() => this.getSafeID(this.props.video.index + 1)}
          />
        </FlexRow>
        <Box direction="row" justify="between" style={{ padding: "5px 70px" }}>
          {this.getVolumeIcon()}
          <Input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={this.props.volume}
            onChange={e => this.props.changeVolume(e.target.value)}
          />
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

export default connect(mapStateToProps, {
  changeVolume,
  changeVideoIndex,
  pausePlay
})(Left);
