import React, {Component} from 'react';
import ReactDom from 'react-dom';
import RoomCard from './RoomCard.js';

class Rows extends Component {
  renderRoomCard(){
    return(
            this.props.data.map((roomItem, index) => {
               return (
                <RoomCard key={index} id={index} cardImage={"./images/"+roomItem.images[0]} cardTitle = {roomItem.overview} cardContent = {roomItem.description}/>
              );
            }
          )
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

export  default Rows;
