
import { createStore } from 'redux';


function reducer(state, action) {

    //the grid unit that you have visited
    const gridVisited = '('+ state.x + ','+ state.y + ')';

    //create a new updated list of visited locations to update the state with.
    const updatedVisit = state.visited.concat([gridVisited])

    //establish the variables that will be used for the
    //new coordinates after a move is made
    let newX;
    let newY;

    //set the values for the new possible coordinates
    if (action.type === 'MOVE'){
       newX = state.x + action.payload.x;
       newY = state.y + action.payload.y;
    }

    //create a new filtered array of coordinates that match the current
    //gridVisited with those that have been visited. Since the most recent
    //coordinate will always be present in the array, if the array is longer
    //than 1, then it is a repeat coordinate.
    let testVisit = updatedVisit.filter(coordinates=> coordinates === gridVisited);

    //if the crazy cabbie hits a unit he has already visited,
    //deduct 2 from the gas amount instead of one.
    if (action.type === 'MOVE' &&
        state.gas >= 1 &&
        (newX > 0 && newX < 6 && newY > 0 && newY < 6) &&
        testVisit.length > 1 ){
          return {
              gas: state.gas - 2,
              score: state.score + 1,
              x: newX,
              y: newY,
              visited: updatedVisit,
          };
    }

    // Move in all four directions if their is gas left and
    //you are tring to move within the board.
    if (action.type === 'MOVE' &&
        state.gas >= 1 &&
        (newX > 0 && newX < 6 && newY > 0 && newY < 6)) {
        return {
            gas: state.gas - 1,
            score: state.score + 1,
            x: newX,
            y: newY,
            visited: updatedVisit,
        };
    }
    return state;
}

// Store (object, createStore())
export const store = createStore(reducer, {
    gas: 20,
    score: 0,
    x: 2,
    y: 3,
    visited: [],
});
