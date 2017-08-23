import React, { Component } from "react";
import styled from "styled-components";
import _ from 'lodash';
import { connect } from "react-redux";
import { changeVideoIndex } from '../actions/';
import {
  List,
  ListItem,
  Header,
  Title,
  Box,
  Button,
  ActionsIcon,
  Footer
} from "grommet";

const BoxFooter = styled(Box)`
  width: 90%;
  text-align: center;
  padding: 4px 0px;
  font-size: 12px;
`;

const SongTitle = styled.span`
  font-size: 14px;
  font-weight: 300;
`

const StyledListItem = styled(ListItem)`
  opacity: ${props => props.selected? '1' : '0.5'
  };

  &:hover{
    background-color: rgba(255,255,255,0.1)
  }
`

class Right extends Component {
  renderListItem(index, title){
    return (
      <StyledListItem selected={index === this.props.video.index} justify="between" key={index} onClick={() => this.props.changeVideoIndex(index)} separator={index === this.props.video.index ? "horizontal" : 'none'}>
        <SongTitle>{title}</SongTitle>
      </StyledListItem>
    )
  }

  render() {
    const { items } = this.props.playlist;
    let videoIndex = 0;
    return (
      <div>
        <Header style={{ height: "20vh" }} justify="center">
          <Box
            colorIndex="neutral-4"
            direction="row"
            justify="between"
            style={{ width: "90%" }}
          >
            <Title style={{ marginLeft: "10px" }}>Proximity Uploads</Title>
            <Button
              plain
              icon={<ActionsIcon />}
              onClick={() => console.log("hi")}
            />
          </Box>
        </Header>
        <List style={{ height: "70vh" }}>
           {_.map(items, item => 
            this.renderListItem(videoIndex++, item.snippet.title)
           )}
        </List>
        <Footer style={{ height: "10vh" }} justify="center">
          <BoxFooter colorIndex="neutral-4">
             {this.props.playlist.pageInfo && 
              this.props.playlist.pageInfo.totalResults } Videos
          </BoxFooter>
        </Footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playlist: state.playlist,
  video: state.video
})

export default connect(mapStateToProps, { changeVideoIndex })(Right);
