import React from 'react';
import ReactDOM from 'react-dom';

export default class Courses extends React.Component {
  render() {
    return (
      <div className="list">
        <h4>List of courses taken:</h4>
        <ul className="list-group">
          <li className="list-group-item">Algorithm</li>
          <li className="list-group-item">Machine Learning</li>
          <li className="list-group-item">Graphical User Interface I</li>
          <li className="list-group-item">Graphical User Interface II</li>
          <li className="list-group-item">Data mining</li>
        </ul>
      </div>
    )
  }
}
