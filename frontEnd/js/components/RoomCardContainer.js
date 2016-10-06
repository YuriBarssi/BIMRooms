import React, {Component} from 'react';
import ReactDom from 'react-dom';
import RoomCard from './RoomCard.js';

import myRooms from 'json!../../../backEnd/data/list_rooms.JSON';

console.log(myRooms);
const myRoomJason = myRooms;

class RoomCardContainer extends Component {
	render() {
		return (
      <div>
        {myRoomJason.map ((roomItem, index) => {
          console.log(roomItem.images[0]);
          return (
            <RoomCard key={index} cardImage={"./images/"+roomItem.images[0]+""} cardTitle = {roomItem.overview} cardContent = {roomItem.description}/>
          );
        })}
      </div>
    );
	}
}

export  default RoomCardContainer;
