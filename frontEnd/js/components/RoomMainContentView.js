import React, { Component } from 'react';
import Router from'react-router';  
import ReactDom from 'react-dom';

import FullSearchBar from './FullSearchBar';
import RoomCardContainer from './RoomCardContainer';
import PaginationItem from './PaginationItem';
import StaticCornerMenu from './StaticCornerMenu';

import NavigationBar from './NavigationBar';
import PageFooter from './PageFooter';


class MainContentView extends Component {
  render() {
    return (
        <div className="container">
          <br></br>
          <RoomCardContainer />
          <br></br>
          <br></br>
          <StaticCornerMenu />
        </div>
    );
  }
}

export  default MainContentView;
