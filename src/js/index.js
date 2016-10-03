import React from 'react';
import ReactDOM from 'react-dom';

class AppRender extends React.Component{
  render(){
    return(
      <div>
          <p>TEST</p>
      </div>
    );
  }
}

ReactDOM.render(<AppRender/>, document.getElementById('app'));
