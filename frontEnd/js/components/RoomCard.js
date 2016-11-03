import React, {Component} from 'react';
import ReactDom from 'react-dom';


class RoomCard extends Component {

  generateID() {
    return '#' + this.props.id;
  }
  render() {
    return (
      <div className="col m4">
        <div className="card">
         <div className="card-image">
           <img className="imgRow" src={this.props.cardImage} />
           <span className="card-title">{this.props.cardTitle}</span>
         </div>
         <div className="card-content">
           <p>{this.props.cardContent}</p>
         </div>
         <div className="card-action">
           <a href = {this.generateID()} className="waves-effect waves-light btn modal-trigger">Click to open</a>
         </div>
         {/* Below is the modal*/}
         <div id={this.props.id} className="modal">
          <div class="modal-content">
            <img className="imgModal" src={this.props.cardImage} />
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
       </div>
      </div>
    );
  }
}

export  default RoomCard;
