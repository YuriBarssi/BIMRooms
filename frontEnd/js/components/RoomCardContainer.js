import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Rows from './RoomCardRows.js';
import {connect} from 'react-redux';

let myRoomJSON;
const minimumColumnsPerRow = 3;



class RoomCardContainer extends Component {
  constructor(props) {
    super(props);
    myRoomJSON = this.props.rooms;
  }
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
          return (<Rows key = {index} data={columns} />);
        })
      );
  }
  render() {
    return(
    <div className="section">
        {this.renderRow()}
    </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        rooms: state.rooms
    };
}

export  default connect(mapStateToProps)(RoomCardContainer);