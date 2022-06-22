import React from 'react';
import Modal from 'react-modal';
import './Submission.css';
import axios from 'axios';

class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true,
      idea: '',
      name: '',
      department: '',
      id: '',
    };
  }

  componentDidMount() {
  }

  close = () => {
    const { submit } = this.props;
    this.setState({ modalOpen: false });
    submit(false);
  };

  postSubmit = () => {
    const {
      idea, name, department, id,
    } = this.state;
    const options = {
      url: '/ideas',
      method: 'post',
      data: {
        idea,
        name,
        department,
        id,
      },
    };
    axios(options).then((data) => {
      console.log('POST Success', data);
    }).catch(() => {
      console.log('error on post');
    });
    this.close();
  };

  render() {
    const { modalOpen } = this.state;
    return (
      <Modal isOpen={modalOpen} appElement={document.getElementById('root')}>
        <div className="styleContainer">
          <h3>Idea Submission Form</h3>
          <textarea
            className="textArea"
            placeholder="*Submit Your Idea!"
            rows="6"
            cols="60"
            onChange={(e) => { this.setState({ idea: e.target.value }); }}
          />
          <div>Name:</div>
          <input
            className="name"
            placeholder="Who are you?"
            onChange={(e) => { this.setState({ name: e.target.value }); }}
          />
          <div>Department:</div>
          <input
            placeholder="Where are you?"
            className="department"
            onChange={(e) => { this.setState({ department: e.target.value }); }}
          />
          <div>Department ID:</div>
          <input
            placeholder="Digits?"
            className="deptID"
            onChange={(e) => { this.setState({ id: e.target.value }); }}
          />
          <button onClick={this.postSubmit} className="submitButton" type="button">SUBMIT</button>
          <button onClick={this.close} type="button">CLOSE</button>
        </div>

      </Modal>
    );
  }
}

export default Submission;
