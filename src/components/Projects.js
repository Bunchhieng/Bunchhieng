import React from 'react';
import ReactDOM from 'react-dom';

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <p>List of projects:</p>
        <ul>
          <li><a href="#">Hacker News Reader</a></li>
          <li>Machine Learning</li>
          <li>Graphical User Interface I</li>
          <li>Graphical User Interface II</li>
        </ul>
      </div>
    )
  }
}
