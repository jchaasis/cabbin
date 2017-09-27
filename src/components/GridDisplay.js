import React, { Component } from 'react';

import GridUnit from './GridUnit';





class GridDisplay extends Component {

//TODO: create a function or variable using loops to make the grid panel instead of
//hard coding 25 squares.

    render() {
      let panel = {
        display: 'flex',
        justifyContent: 'center'
      }
        return (
            <div style={panel}>
              <div>
                <GridUnit xPos='1' yPos='5'/>
                <GridUnit xPos='1' yPos='4'/>
                <GridUnit xPos='1' yPos='3'/>
                <GridUnit xPos='1' yPos='2'/>
                <GridUnit xPos='1' yPos='1'/>
              </div>
              <div>
                <GridUnit xPos='2' yPos='5'/>
                <GridUnit xPos='2' yPos='4'/>
                <GridUnit xPos='2' yPos='3'/>
                <GridUnit xPos='2' yPos='2'/>
                <GridUnit xPos='2' yPos='1'/>
              </div>
              <div>
                <GridUnit xPos='3' yPos='5'/>
                <GridUnit xPos='3' yPos='4'/>
                <GridUnit xPos='3' yPos='3'/>
                <GridUnit xPos='3' yPos='2'/>
                <GridUnit xPos='3' yPos='1'/>
              </div>
              <div>
                <GridUnit xPos='4' yPos='5'/>
                <GridUnit xPos='4' yPos='4'/>
                <GridUnit xPos='4' yPos='3'/>
                <GridUnit xPos='4' yPos='2'/>
                <GridUnit xPos='4' yPos='1'/>
              </div>
              <div>
                <GridUnit xPos='5' yPos='5'/>
                <GridUnit xPos='5' yPos='4'/>
                <GridUnit xPos='5' yPos='3'/>
                <GridUnit xPos='5' yPos='2'/>
                <GridUnit xPos='5' yPos='1'/>
              </div>

            </div>
        );
    }
}
export default GridDisplay;
