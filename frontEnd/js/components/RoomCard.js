import React, {Component} from 'react';
import ReactDom from 'react-dom';


class RoomCard extends Component {
  render() {
    return (
      <div className="col m4">
        <div className="card">
         <div className="card-image">
           <img src={this.props.cardImage} />
           <span className="card-title">{this.props.cardTitle}</span>
         </div>
         <div className="card-content">
           <p>{this.props.cardContent}</p>
         </div>
         <div className="card-action">
           <a href="#">Click to open</a>
         </div>
       </div>
      </div>
    );
  }
}

export  default RoomCard;
