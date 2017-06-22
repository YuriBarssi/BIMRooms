import React, {Component} from 'react';
import { Router, Route, hashHistory } from 'react-router';
import ReactDom from 'react-dom';
import NavigationBar from './components/NavigationBar';
import RoomMainContentView from './components/RoomMainContentView';
import ClassroomMainContentView from './components/ClassroomMainContentView';
import PageFooter from './components/PageFooter';

class App extends Component {
	render() {
		return (
				<div>
					<NavigationBar />
					<br></br>
					<Router history={hashHistory}>
						<Route path="/" component={ RoomMainContentView } />
						<Route path="Rooms" component={ RoomMainContentView } />
						<Route path="Classrooms" component={ ClassroomMainContentView } />
					</Router>
					<br></br>
        			<PageFooter />
				</div>
			);
	}
}
ReactDom.render(<App />, document.getElementById('app'));
