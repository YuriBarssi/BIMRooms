import React, {Component} from 'react';
import ReactDom from 'react-dom';

class FavoritesNav extends Component {
  render() {
    return (
      <ul id="slide-out" className="side-nav">
        <li><div className="userView">
          <div className="background">
          </div>
          <a href="#!name"><span className="white-text name">John Doe</span></a>
          <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
        </div></li>
        <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
        <li><a href="#!">Second Link</a></li>
        <li><div className="divider"></div></li>
        <li><a className="subheader">Subheader</a></li>
        <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
      </ul>
    );
  }
}

export default FavoritesNav;
