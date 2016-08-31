import React from 'react';
import ReactDOM from 'react-dom';

export default class Projects extends React.Component {
  render() {
    return (
      <div className="list">
        <h4>List of projects:</h4>
        <ul className="list-group">
          <li className="list-group-item"><a href="https://github.com/Bunchhieng/hnreader" target="_blank">Hacker News Reader</a></li>
          <li className="list-group-item"><a href="https://github.com/Bunchhieng/Hawkathon" target="_blank">Recipe recommender and sentimental analysis using HPE API</a></li>
          <li className="list-group-item"><a href="https://github.com/Hive-Labs/Wingman" target="_blank">Wingman</a></li>
          <li className="list-group-item"><a href="https://github.com/Hive-Labs/IDHack2016" target="_blank">IDHack 2016</a></li>
        </ul>
      </div>
    )
  }
}
