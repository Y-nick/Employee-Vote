import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './IdeaList.css';
import Submission from './Submission.jsx';

class IdeaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitOpen: false,
      ideaData: [],
      currentID: 'ALL',
    };
  }

  componentDidMount() {
    this.fetchAll();
  }

  submitModal = (cb) => {
    this.setState({ submitOpen: cb });
  };

  filterByDept = (e, deptNum) => {
    console.log(e.target.value);
    this.setState({ currentID: e.target.value });
    this.fetchAll();
  };

  vote = (idea) => {
    const options = {
      url: '/ideas',
      method: 'put',
      data: {
        id: idea.id,
      },
    };
    axios(options).then((data) => {
      this.fetchAll();
    }).catch((data) => {
      console.log('FAILURE ON PUT Vote', data);
    });
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
    const { submitOpen, ideaData, currentID } = this.state;
    return (
      <div className="ideaListContainer">
        <h1 className="title">Ideas of the Month!</h1>
        <div className="lineOneContainer">
          <div className="dropdownDiv">
            <div className="sortBy">Sort By Dept.</div>
            <select onChange={(e) => { this.filterByDept(e); }} id="dept">
              <option value="ALL">All Departments</option>
              <option value="1">IT</option>
              <option value="2">Accounting</option>
              <option value="3">Finance</option>
              <option value="4">HR</option>
            </select>
          </div>
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
            ideaData.sort((a, b) => (
              b.votes - a.votes
            )).filter((idea) => {
              if (idea.department_id.toString() === currentID) {
                return idea;
              }
              if (currentID === 'ALL') {
                return idea;
              }
            }).map((idea) => (
              <div className="listItem" key={idea.id}>
                <div className="descriptionDiv">
                  <div className="author">{`Author: ${idea.author}`}</div>
                  <div className="subject">{`Subject: ${idea.sub}`}</div>
                  <div className="department">{`Department: ${idea.department}`}</div>
                  <div className="voteDiv" onClick={() => { this.vote(idea); }}>
                    <div className="votes">{`Votes: ${idea.votes}`}</div>
                    <div className="bootstrap">
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-arrow-up-square" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                      </svg>
                    </div>
                  </div>
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
