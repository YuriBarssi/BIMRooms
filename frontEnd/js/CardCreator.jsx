import React from 'react';
import ReactDOM from 'react-dom';

const AppRender = React.createClass({
  render() {
    return (
      <div class="card">
       <div class="card-image">
         <img src="static/images/2pic1.jpg">
         <span class="card-title">Card Title</span>
       </div>
       <div class="card-content">
         <p>I am a very simple card. I am good at containing small bits of information.
         I am convenient because I require little markup to use effectively.</p>
       </div>
       <div class="card-action">
         <a href="#">This is a link</a>
       </div>
     </div>
    );
  }
});

ReactDOM.render(<AppRender/>, document.getElementById('app'));
