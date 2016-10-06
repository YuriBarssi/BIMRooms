import React, {Component} from 'react';
import ReactDom from 'react-dom';
import FullSearchBar from './FullSearchBar';
import RoomCardContainer from './RoomCardContainer';
import PaginationItem from './PaginationItem';
import StaticCornerMenu from './StaticCornerMenu';

class MainContentView extends Component {
  render() {
    return (
      <div className="container">
        <FullSearchBar />
        <br></br>
        <RoomCardContainer />
        <br></br>
        <br></br>
        <PaginationItem />
        <StaticCornerMenu />
      </div>
    );
  }
}

export  default MainContentView;
