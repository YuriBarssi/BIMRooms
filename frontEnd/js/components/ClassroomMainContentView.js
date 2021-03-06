import React, {Component} from 'react';
import ReactDom from 'react-dom';
import RoomCardRows from './RoomCardRows.js';
import StaticCornerMenu from './StaticCornerMenu';
import myRooms from 'json!../../../backEnd/data/list_classrooms.JSON';

const myRoomJSON = myRooms;
const minimumColumnsPerRow = 4;

class RoomCardContainer extends Component {
  splitRow() {
    let count = 1;
    let pushNewArray = [];
    let newRoomJSONList = [];

    for(let index = 0; index < myRoomJSON.length; index++) {
      if (count > minimumColumnsPerRow) {
        newRoomJSONList.push(pushNewArray)
        pushNewArray = [];
        pushNewArray.push(myRoomJSON[index]);
        count = 1;
      } else {
        pushNewArray.push(myRoomJSON[index]);
        count++;
      }
    }
    newRoomJSONList.push(pushNewArray);
    return newRoomJSONList
  }
  renderRow() {
    let myArray = this.splitRow();
    console.log(myArray);
    return(
        myArray.map((columns, index) => {
          console.log('inside columns');
          console.log(columns);
          return (<RoomCardRows key = {index} id = {'class' + index.toString()} data={columns} />);
        })
      );
  }
  render() {
    return(
    <div className="container">
        <br></br>
	    <div className="section">
	        {this.renderRow()}
	    </div>
	    <br></br>
        <br></br>
        <StaticCornerMenu />
    </div>
    );
  }
}

export default RoomCardContainer;