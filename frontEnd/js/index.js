import React, {Component} from 'react';
import ReactDom from 'react-dom';
import NavigationBar from './components/NavigationBar';
import MainContentView from './components/MainContentView';
import PageFooter from './components/PageFooter';

class App extends Component {
	render() {
		return (
			<div>
				<NavigationBar />
				<br></br>
				<MainContentView />
				<br></br>
				<PageFooter />
			</div>
			);
	}
}
ReactDom.render(<App />, document.getElementById('app'));
