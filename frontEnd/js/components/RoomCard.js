import React, {Component} from 'react';
import ReactDom from 'react-dom';

class RoomCard extends Component {

  generateID() {
    return '#' + this.props.id;
  }
  render() {
    return (
      <div className="col m4">
        <div className="card modal-trigger" href = {this.generateID()}>
         <div className="card-image">
           <img className="imgRow" src={this.props.cardImage} />
           <span className="card-title">{this.props.cardTitle}</span>
         </div>
         <div className="card-content">
           <p>{this.props.cardContent}</p>
         </div>
         <div className="card-action orange-text text-darken-4">
           <i className="material-icons orange-text text-darken-4">stars</i>
          </div>
         {/* Below is the modal*/}
         <div id={this.props.id} className="modal modalCss">
          <div className="modal-content">
            <div>
              <img className="imgModal" src={this.props.cardImage} />
            </div>
            <h5>{this.props.cardTitle}</h5>
            <div>
              {this.props.cardContent}
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-gray btn-flat blue-text text-darken-2">
              Contact Person
            </a>
          </div>
        </div>
       </div>
      </div>
    );
  }
}

export  default RoomCard;
