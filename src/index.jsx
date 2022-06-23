import React from 'react';
import reactDom from 'react-dom';
import IdeaList from './IdeaList.jsx';
import './app.css';

const App = function () {
  return (
    <div className="app">
      <IdeaList />
    </div>
  );
};
//
reactDom.render(<App />, document.getElementById('root'));
