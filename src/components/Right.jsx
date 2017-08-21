import React, { Component } from "react";
import styled from "styled-components";
import _ from 'lodash';
import { connect } from "react-redux";
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
  &:hover{
    font-weight: 400;
  }
`

class Right extends Component {
  render() {
    const { items } = this.props.playlist;
    let videoIndex = 1;
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
              icon={<ActionsIcon />}
              onClick={() => console.log("hi")}
            />
          </Box>
        </Header>
        <List style={{ height: "70vh" }}>
           {_.map(items, item => 
           videoIndex === 1?
            <ListItem justify="between" key={++videoIndex} separator="horizontal">
              <SongTitle>{item.snippet.title}</SongTitle>
            </ListItem>
            :
            <ListItem justify="between" key={++videoIndex}>
              <SongTitle>{item.snippet.title}</SongTitle>
            </ListItem>
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
  playlist: state.playlist
})

export default connect(mapStateToProps, null)(Right);
