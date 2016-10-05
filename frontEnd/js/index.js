import React, {Component} from 'react';
import ReactDom from 'react-dom';
import NavigationBar from './components/NavigationBar'
import MainContentView from './components/MainContentView';

class App extends Component {
	render() {
		return (
			<div>
				<NavigationBar />
				<MainContentView />
			</div>
			);
	}
}
ReactDom.render(<App />, document.getElementById('app'));