import React from 'react';
import reactDom from 'react-dom';
import IdeaList from './IdeaList.jsx';

const App = function () {
  return (
    <div>
      <IdeaList />
    </div>
  );
};

reactDom.render(<App />, document.getElementById('root'));
