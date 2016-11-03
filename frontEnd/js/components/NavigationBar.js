import React, {Component} from 'react';
import ReactDom from 'react-dom';

class NavigationBar extends Component {
	render() {
		let initialName = " / Rooms";
		return (
			<div>
				<nav className="light-blue darken-4" role="navigation">
			    <div className="nav-wrapper">
			      <a href="#!" className="brand-logo">
							<i className="material-icons">business</i>BIM
							<a href="#!" className="dropdown-button" data-activates="dropdown1">{initialName}</a></a>
								<ul id='dropdown1' className="dropdown-content">
								 <li><a className="light-blue darken-4 white-text" href="#!">/Rooms</a></li>
								 <li><a className="light-blue darken-4 white-text" href="#!">/Classrooms</a></li>
								 <li><a className="light-blue darken-4 white-text" href="#!">/Shareplace</a></li>
								 <li><a className="light-blue darken-4 white-text" href="#!">/Motors</a></li>
								</ul>


			      <ul className="right hide-on-med-and-down">
			        <li><a href="#!"><i className="material-icons left">search</i>Refine your Search</a></li>
			        <li><a href="#!"><i className="material-icons">view_module</i></a></li>
							<li><a href="#!"><i className="material-icons">view_list</i></a></li>
			        <li><a href="#!"><i className="material-icons">refresh</i></a></li>
			        <li><a href="#!"><i className="material-icons">more_vert</i></a></li>
			      </ul>
			    </div>
		 	</nav>
		</div>
		);
	}
}

export  default NavigationBar;
