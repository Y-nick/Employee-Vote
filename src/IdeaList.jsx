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
      ideaData: [],
    };
  }

  componentDidMount() {
    this.fetchAll();
  }

  submitModal = (cb) => {
    this.setState({ submitOpen: cb });
  };

  // test arrow and non-arrow function
  fetchAll = () => {
    axios.get('/ideas').then(data => {
      this.setState({ ideaData: data.data });
    }).catch(() => {
      console.log('Error on intial GET');
    });
  };

  render() {
    const { submitOpen, ideaData } = this.state;
    return (
      <div className="ideaListContainer">
        <h1 className="title">Ideas of the Month!</h1>
        <div className="lineOneContainer">
          <div className="submitDiv">
            <h3 className="submitIdea" onClick={this.submitModal} >Submit Your Idea</h3>
          </div>
          <div className="bonDiv">
            <div id="july">JULY BONUS</div>
            {/* <img className="bonusImage" src={thousand} alt="$1000" /> */}
            <div className="thousand">$1000.00</div>
          </div>
        </div>
        <div className="listDiv">
          {
            ideaData.map((idea) => (
              <div className="listItem" key={idea.id}>
                <div className="descriptionDiv">
                  <div className="author">{`Author: ${idea.author}`}</div>
                  <div className="subject">{`Subject: ${idea.sub}`}</div>
                  <div className="department">{`Department: ${idea.department}`}</div>
                  <div className="votes">{`Votes: ${idea.votes}`}</div>
                </div>
                <div>{idea.idea}</div>
              </div>
            ))
          }
        </div>
        { submitOpen ? <Submission fetchAll={this.fetchAll} submit={this.submitModal} /> : null }
      </div>
    );
  }
}

export default IdeaList;
