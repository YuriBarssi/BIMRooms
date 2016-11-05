import React, {Component} from 'react';
import ReactDom from 'react-dom';

class PaginationItem extends Component {
  render() {
    return (
      <div>
        <ul className="pagination center-align">
          <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
          <li className="active blue lighten-1" ><a href="#!">1</a></li>
          <li className="waves-effect"><a href="#!">2</a></li>
          <li className="waves-effect"><a href="#!">3</a></li>
          <li className="waves-effect"><a href="#!">4</a></li>
          <li className="waves-effect"><a href="#!">5</a></li>
          <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
      </div>
    );
  }
}

export  default PaginationItem;
