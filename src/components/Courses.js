import React from 'react';
import ReactDOM from 'react-dom';

export default class Courses extends React.Component {
  render() {
    return (
      <div>
        <p>List of courses taken:</p>
        <ul>
          <li>Algorithm</li>
          <li>Machine Learning</li>
          <li>Graphical User Interface I</li>
          <li>Graphical User Interface II</li>
        </ul>
      </div>
    )
  }
}
