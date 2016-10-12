import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/index';
import ReactDom from 'react-dom';
import NavigationBar from './components/NavigationBar';
import MainContentView from './components/MainContentView';
import PageFooter from './components/PageFooter';

const store = createStore(
    allReducers
);
class App extends Component {
	render() {
		return (
			<Provider store={store}>
			<div>
				<NavigationBar />
				<br></br>
				<MainContentView />
				<br></br>
				<PageFooter />
			</div>
			</Provider>
			);
	}
}
ReactDom.render(<App />, document.getElementById('app'));
