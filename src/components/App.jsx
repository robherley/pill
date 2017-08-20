import React, { Component } from 'react';
import { Split, Box } from 'grommet';
import styled from 'styled-components';

import Left from './Left';
import Right from './Right';

const DragBar = styled.div`
  position: absolute;
  // background-color: red;
  height: 25px;
  width: 100%;
  margin-bottom: 25px;
  -webkit-app-region: drag;
  z-index: 2;
`

class App extends Component {
  render() {
    return (
      <div>
        <DragBar />
        <Split>
          <Box 
            full
            colorIndex='neutral-4'
            justify='center'
            align='center'
            >
            <Left />
          </Box>
           <Box 
            full
            colorIndex='light-2'
            justify='center'
            >
            <Right />
          </Box> 
        </Split>
      </div>
    );
  }
}

export default App;
