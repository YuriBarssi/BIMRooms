import React, {Component} from 'react';
import ReactDom from 'react-dom';
import RoomCard from './RoomCard.js';

class RoomCardRows extends Component {
  renderRoomCard(){
    return(
      this.props.data.map((roomItem, index) => {
        return (
          <RoomCard key={index} id={index.toString() + this.props.id} cardImage={"./images/"+roomItem.images[0]}
            room={roomItem}/>
        );
      })
    );
  }
  render() {
    console.log(this.props.data);
    return (
      <div className="row">
        {this.renderRoomCard()}
      </div>
    );
  }
}

export default RoomCardRows;
