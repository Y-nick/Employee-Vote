import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import thousand from './assets/1000.jpg';
import './IdeaList.css';
import Submission from './Submission.jsx';

class IdeaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitOpen: false,
    };

    this.fetchAll = this.fetchAll.bind(this);
  }

  componentDidMount() {
    axios.get('/ideas').then(data => {
      console.log('SUCCESS on initial GET')
    }).catch(() => {
      console.log('Error on intial GET')
    });
  }

  submitModal = (cb) => {
    this.setState({ submitOpen: cb });
  };

  // test arrow and non-arrow function
  fetchAll() {
    axios.get('/ideas').then(data => {
      console.log('SUCCESS on initial GET')
    }).catch(() => {
      console.log('Error on intial GET')
    });
  }

  render() {
    const { submitOpen } = this.state;
    return (
      <div className="ideaListContainer">
        <h1 className="title">Ideas of the Month!</h1>
        <div className="lineOneContainer">
          <div className="submitDiv">
            <h3 className="submitIdea" onClick={this.submitModal} >Submit Your Idea</h3>
          </div>
          <div>
            <div id="july">JULY BONUS</div>
            <img className="bonusImage" src={thousand} alt="$1000" />
          </div>
        </div>
        <div className="listDiv">

        </div>
        { submitOpen ? <Submission submit={this.submitModal} /> : null }
      </div>
    );
  }
}

export default IdeaList;
