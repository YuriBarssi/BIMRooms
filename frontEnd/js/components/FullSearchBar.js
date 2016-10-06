import React, {Component} from 'react';
import ReactDom from 'react-dom';


class FullSearchBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper white">
            <form>
              <div className="input-field">
                <input id="search" placeholder="Let us know what do you want..." type="search" required></input>
                <label htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export  default FullSearchBar;
