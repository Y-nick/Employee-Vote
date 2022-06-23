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
      author: '',
      department: '',
      department_id: '',
      sub: '',
    };
  }

  componentDidMount() {
    const { fetchAll } = this.props;
    fetchAll();
  }

  close = () => {
    const { submit } = this.props;
    this.setState({ modalOpen: false });
    submit(false);
  };

  postSubmit = () => {
    const {
      idea, author, department, department_id, sub,
    } = this.state;
    const options = {
      url: '/ideas',
      method: 'post',
      data: {
        idea,
        author,
        department,
        department_id,
        sub,
      },
    };
    axios(options).then((data) => {
      console.log('POST Success', data);
    }).catch(() => {
      console.log('error on post');
    });
    alert('SUCCESS!');
    this.close();
  };

  render() {
    const { modalOpen } = this.state;
    return (
      <Modal isOpen={modalOpen} appElement={document.getElementById('root')}>
        <div className="styleContainer">
          <h3>Idea Submission Form</h3>
          <div>Subject:</div>
          <input
            className="subjectSubmit"
            placeholder="What's this all about?"
            onChange={(e) => { this.setState({ sub: e.target.value }); }}
          />
          <div>What is your idea?</div>
          <textarea
            className="textArea"
            placeholder="*Submit Your Idea!"
            rows="6"
            cols="60"
            onChange={(e) => { this.setState({ idea: e.target.value }); }}
          />
          <div>Name:</div>
          <input
            className="nameSubmit"
            placeholder="Who are you?"
            onChange={(e) => { this.setState({ author: e.target.value }); }}
          />
          <div>Department:</div>
          <input
            placeholder="Where are you?"
            className="departmentSubmit"
            onChange={(e) => { this.setState({ department: e.target.value }); }}
          />
          <div>Department ID:</div>
          <input
            placeholder="Digits?"
            className="deptID"
            onChange={(e) => { this.setState({ department_id: e.target.value }); }}
          />
          <button onClick={this.postSubmit} className="submitButton" type="button">SUBMIT</button>
          <button onClick={this.close} type="button">CLOSE</button>
        </div>

      </Modal>
    );
  }
}

export default Submission;
