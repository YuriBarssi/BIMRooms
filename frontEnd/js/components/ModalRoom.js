import React, {Component} from 'react';
import ReactDom from 'react-dom';


class ModalRoom extends Component {
  getInitialState() {
    return { modalIsOpen: false};
  },
  openModal(listValue) {
    this.setState({modalIsOpen: true});
  },
  closeModal() {
    this.setState({modalIsOpen: false});
  },
  render() {
    return (
      <div>
      <!-- Modal Trigger -->
      <a class="modal-trigger waves-effect waves-light btn" href="#modal1">Modal</a>

      <!-- Modal Structure -->
      <div id="modal1" class="modal modal-fixed-footer">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
        </div>
      </div>
      </div>
    );
  }
}

export default ModalRoom;
