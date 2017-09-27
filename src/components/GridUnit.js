import React, {Component} from 'react';

import { connect } from 'react-redux';

class GridUnit extends Component {

  constructor(props){
    super(props);

    this.state = {
      visited: false,
    }
  }

  componentWillReceiveProps(nextProps){

    if (parseInt(this.props.xPos) === nextProps.x &&
        parseInt(this.props.yPos) === nextProps.y ){
          this.setState({
            visited: true,
          })
      }
  }

  render(){
    //
    let cab;

    //styling for an empty grid unit
    let gridUnit= {
     width: "50px",
     height: "50px",
     backgroundColor: "gray",
     borderWeight: "1px",
     borderStyle: "solid",
     borderColor: "black"
    }

    //styling for a unit that has been visited
    let visited= {
      width: "50px",
      height: "50px",
      backgroundColor: "orange",
      borderWeight: "1px",
      borderStyle: "solid",
      borderColor: "black"
    }
    //styling for the car to be tinkered with later
    let car = {
      fontSize:"1.5em",
    }

    //if the x and y coordinates from the GridUnit props passed down
    //from the GridDisplay are equal to the current position of the
    //driver as set forth by the store. Render that square accordingly
    //with the car present
    if (parseInt(this.props.xPos) === this.props.x &&
        parseInt(this.props.yPos) === this.props.y ){
          cab = (<p style={car}> &#127950; </p>);
          gridUnit = {
                  width: "50px",
                  height: "50px",
                  backgroundColor: "yellow",
                  borderWeight: "1px",
                  borderStyle: "solid",
                  borderColor: "black"
                }

      return(
          <div style={gridUnit}>
            {cab}
          </div>
      )

    } else if( this.state.visited === true){ //if the visited state of the cell is true, adjust accordingly
      return(
        <div style={visited}>

        </div>
      )
    } else {
      return(
        <div style={gridUnit}>
        </div>
      )
    }
  }
}

  function state2props(state) {

      return {
          gas: state.gas,
          x: state.x,
          y: state.y,
      };
  }

  function dispatch2props(dispatch) {
      return {
      //returning an empty object
      };
  }


export default connect(state2props, dispatch2props)(GridUnit);
