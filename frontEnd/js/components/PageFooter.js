import React, {Component} from 'react';
import ReactDom from 'react-dom';


class PageFooter extends Component {
  render() {
    return (
      <div>
      <footer className="page-footer center light-blue darken-4">
        <div className="footer-copyright">
          <div className="container">
          <a className="orange-text text-lighten-3" href="http://materializecss.com">BIM Rooms - 2016</a>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}

export  default PageFooter;
