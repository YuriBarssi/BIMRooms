import React, {Component} from 'react';
import ReactDom from 'react-dom';


class StaticCornerMenu extends Component {
  render() {
    return (
      <div className="fixed-action-btn horizontal" >
        <a className="btn-floating btn-large blue">
          <i className="large material-icons">menu</i>
        </a>
        <ul>
          <li><a className="btn-floating blue"><i className="material-icons">settings</i></a></li>
          <li><a className="btn-floating blue"><i className="material-icons">perm_identity</i></a></li>
          <li><a className="btn-floating blue"><i className="material-icons">mail</i></a></li>
          <li><a className="btn-floating blue"><i className="material-icons">add</i></a></li>
        </ul>
      </div>
    );
  }
}

export  default StaticCornerMenu;
