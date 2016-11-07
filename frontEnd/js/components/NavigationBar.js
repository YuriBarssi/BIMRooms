import React, {Component} from 'react';
import ReactDom from 'react-dom';

class NavigationBar extends Component {
	constructor() {
		super();
		this.state = {
			initialName: " / Rooms"
		};
	}
	changeTitle(title) {
		console.log('changing');
		this.setState ({initialName: title});
	}
	render() {
		let initialName = " / Rooms";
		return (
			<div>
				<nav className="light-blue darken-4" role="navigation">
			    <div className="nav-wrapper">
			      <a href="#!" className="brand-logo">
							<i className="material-icons">business</i>BIM
								<a href="#!" className="dropdown-button" data-activates="dropdown1">
									{this.state.initialName}
								</a>
					</a>
								<ul id='dropdown1' className="dropdown-content">
								 <li>
								 	<a className="light-blue darken-4 white-text" onClick={this.changeTitle.bind(this, '/ Rooms')} href="/#/Rooms">
								 		/Rooms
								 	</a>
								 </li>
								 <li>
								 	<a className="light-blue darken-4 white-text"  onClick={this.changeTitle.bind(this, '/ Classrooms')} href="/#/Classrooms">
								 		/Classrooms
								 	</a>
								 </li>
								 <li>
								 	<a className="light-blue darken-4 white-text" onClick={this.changeTitle.bind(this, '/ Shareplaces')} href="/#/Shareplaces">
								 		/Shareplace
								 	</a>
								 </li>
								 <li>
								 	<a className="light-blue darken-4 white-text" onClick={this.changeTitle.bind(this, '/ Motors')} href="/#/Motors">
								 		/Motors
								 	</a>
								 </li>
								</ul>


			      <ul className="right hide-on-med-and-down">
			        <li><a data-activates="slide-out" href="#!"><i className="material-icons left">search</i>Refine your Search</a></li>
							<ul id="slide-out" className="side-nav">
								<li><div className="userView">
				          <div className="background">
				          </div>
				        </div></li>
							</ul>
							<li><a href="#!"><i className="material-icons">view_module</i></a></li>
							<li><a href="#!"><i className="material-icons disabled">view_list</i></a></li>
			        <li><a href="javascript:window.location.reload(true)"><i className="material-icons">refresh</i></a></li>
			        <li><a href="#!"><i className="material-icons">more_vert</i></a>
							</li>
			      </ul>
			    </div>
		 	</nav>
		</div>
		);
	}
}

export  default NavigationBar;
