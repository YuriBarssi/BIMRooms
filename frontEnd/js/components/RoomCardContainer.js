import React, {Component} from 'react';
import ReactDom from 'react-dom';
import RoomCard from './RoomCard.js';


class RoomCardContainer extends Component {
	render() {
		return (
      <div>
        <RoomCard />
        <div className="col s12 m4">
          <div className="card">
           <div className="card-image">
             <img src="./images/0pic1.jpg" />
             <span className="card-title">Card Title</span>
           </div>
           <div className="card-content">
             <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
           </div>
           <div className="card-action">
             <a href="#">This is a link</a>
           </div>
         </div>
        </div>

        <div className="col s12 m4">
          <div className="card">
           <div className="card-image">
             <img src="./images/3pic1.jpg" />
             <span className="card-title">Card Title</span>
           </div>
           <div className="card-content">
             <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
           </div>
           <div className="card-action">
             <a href="#">This is a link</a>
           </div>
         </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
           <div className="card-image">
             <img src="./images/4pic1.jpg" />
             <span className="card-title">Card Title</span>
           </div>
           <div className="card-content">
             <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
           </div>
           <div className="card-action">
             <a href="#">This is a link</a>
           </div>
         </div>
        </div>
      </div>
    );
	}
}

export  default RoomCardContainer;
