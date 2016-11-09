import React, {Component} from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';

class RoomCard extends Component {

  generateID() {
    return '#' + this.props.id;
  }
  render() {
    const favoriteClasses = classNames('material-icons', (this.props.room.isFavorite
      ? 'orange-text text-darken-4 right'
      : 'grey-text text-lighten-2 right'));
    return (
      <div className="col m3">
        <div className="card hoverable modal-trigger" href = {this.generateID()}>
         <div className="card-image">
           <img className="imgRow" src={this.props.cardImage} />
           <span className="card-title title-shadowing">
             <b>{this.props.room.overview}</b>
             <div className="text-shadowing">
               <h6>{this.props.room.type_of_house} in {this.props.room.region}</h6>
             </div>
           </span>
         </div>
         <div className="card-action blue-text text-darken-4">
          <b>{this.props.room.ibmer_details.name}</b>
          <div>
            @ {this.props.room.ibmer_details.team}
            <i className={favoriteClasses}>star</i>
          </div>
         </div>
         {/* Below is the modal*/}
         <div id={this.props.id} className="modal modalCss">
           <div className="modal-content">
            <div className="row">
              <div className="col s6">
                 <img src={this.props.cardImage} className="imgModal"/>
              </div>
              <div className="col s6">
                  <h4>{this.props.room.overview}</h4>
                  <p><b>Overview: </b>{this.props.room.description}</p>
                  <p><b>Type of House: </b>{this.props.room.type_of_house}</p>
                  <p><b>Region: </b>{this.props.room.region}</p>
                  <br/>
                  <p><b>Contact: </b>{this.props.room.ibmer_details.name} @ {this.props.room.ibmer_details.team}</p>
                  <br/>
                  <p><i className="material-icons green-text text-darken-4">done</i><b>Verified IBM User</b></p>
                  <p><i className="material-icons green-text text-darken-4">done</i><b>Available Right Away</b></p>
                  <p><i className="material-icons green-text text-darken-4">done</i><b>Near IBM</b></p>
                </div>
              </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action waves-effect btn-flat blue-text text-darken-4">
              Contact Person
              <i className="material-icons orange-text text-darken-4 right">email</i>
            </a>
            <a href="#!" className="modal-action waves-effect btn-flat blue-text text-darken-4">
              Add to Favorites
              <i className="material-icons orange-text text-darken-4 right">star</i>
            </a>
          </div>
        </div>
       </div>
      </div>
    );
  }
}

export  default RoomCard;
