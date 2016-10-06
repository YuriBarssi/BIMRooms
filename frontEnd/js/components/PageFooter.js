import React, {Component} from 'react';
import ReactDom from 'react-dom';


class PageFooter extends Component {
  render() {
    return (
      <div>
      <footer className="page-footer light-blue darken-4">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">BIM Rooms Info</h5>
              <p className="grey-text text-lighten-4">This is an HR Prototype created so BIMers can find places rooms
              for renting or sharing, promoting a new way of sharing and getting to know your coworkers</p>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Settings</h5>
              <ul>
                <li><a className="white-text" href="#!">About the site</a></li>
                <li><a className="white-text" href="#!">Creating an Entry</a></li>
                <li><a className="white-text" href="#!">Configure your Profile</a></li>
                <li><a className="white-text" href="#!">Site Map</a></li>
              </ul>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Connect</h5>
              <ul>
                <li><a className="white-text" href="#!">HR Channel</a></li>
                <li><a className="white-text" href="#!">Your BIM Group</a></li>
                <li><a className="white-text" href="#!">BIM and You</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}

export  default PageFooter;
