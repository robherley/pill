import React, { Component } from "react";
import List from "grommet/components/List";
import ListItem from "grommet/components/ListItem";

class Right extends Component {
  render() {
    return (
      <div style={{marginTop: '200px'}}>
        <List>
          <ListItem justify="between" separator='horizontal'>
            <span>Rise Up</span>
            <span>3:52</span>
          </ListItem>
          <ListItem justify="between">
            <span>Thief 2</span>
            <span>4:00</span>
          </ListItem>
          <ListItem justify="between">
            <span>Light On</span>
            <span>3:43</span>
          </ListItem>
          <ListItem justify="between">
            <span>Rise Up</span>
            <span>3:52</span>
          </ListItem>
          <ListItem justify="between">
            <span>Thief</span>
            <span>4:00</span>
          </ListItem>
          <ListItem justify="between">
            <span>Light On</span>
            <span>3:43</span>
          </ListItem>
          <ListItem justify="between">
            <span>Rise Up</span>
            <span>3:52</span>
          </ListItem>
          <ListItem justify="between">
            <span>Thief</span>
            <span>4:00</span>
          </ListItem>
          <ListItem justify="between">
            <span>Light On</span>
            <span>3:43</span>
          </ListItem>
          <ListItem justify="between">
            <span>Thief</span>
            <span>4:00</span>
          </ListItem>
          <ListItem justify="between">
            <span>Light On</span>
            <span>3:43</span>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Right;
