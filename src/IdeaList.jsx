import React from 'react';
import Modal from 'react-modal';
import thousand from './assets/1000.jpg';
import './IdeaList.css';

class IdeaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitOpen: false,
    };
  }

  fetchAll = () => {

  };

  submitModal = (cb) => {
    this.setState({ submitOpen: cb });
  };

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
        <Modal isOpen={false} />
      </div>
    );
  }
}

export default IdeaList;
