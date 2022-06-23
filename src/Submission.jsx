import React from 'react';
import Modal from 'react-modal';
import './Submission.css';
import axios from 'axios';

const style = {
  overlay: {
    backgroundColor: '#B0D0D3',
  },
  content: {
    background: '#151E3F',
  },
};

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
    const { fetchAll } = this.props;
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
    fetchAll();
    this.close();
  };

  render() {
    const { modalOpen } = this.state;
    return (
      <Modal style={style} isOpen={modalOpen} appElement={document.getElementById('root')}>
        <div className="styleContainer">
          <div onClick={this.close} className="closeDiv">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi-x-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
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
