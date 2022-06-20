import React from 'react';
import Modal from 'react-modal';

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
        <h1>Ideas of the Month!</h1>
        <h2 onClick={this.submitModal} >Submit Your Idea</h2>
        <Modal isOpen={true} />
      </div>
    );
  }
}

export default IdeaList;
