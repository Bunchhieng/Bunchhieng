import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePic from './ProfilePic';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ProfilePic src={"../../public/img/Bun.jpg"} />
        <h4>Bunchhieng Soth</h4>
      </div>
    );
  }
}
