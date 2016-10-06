import React, {Component} from 'react';
import ReactDom from 'react-dom';


class NavigationBar extends Component {
	render() {
		return (
			<div>
				<nav className="light-blue darken-4" role="navigation">
			    <div className="nav-wrapper">
			      <a href="#!" className="brand-logo"><i className="material-icons">business</i>BIM Rooms</a>
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
