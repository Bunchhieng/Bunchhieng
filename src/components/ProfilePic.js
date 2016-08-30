import React from 'react';
import ReactDOM from 'react-dom';

const imgStyle = {
  width: 170,
  height: 170
}

export default class ProfilePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "./img/Bun.jpg"
    }
  }

  handleMouseOver() {
    this.setState({imgSrc: "./img/Saitama.jpg"});
  }

  handleMouseOut() {
    this.setState({imgSrc: "./img/Bun.jpg"});
  }

  render() {
    return (
      <img id="profilePic" src={this.state.imgSrc} style={imgStyle}
      alt="Profile Picture"
      onMouseOver={this.handleMouseOver.bind(this)}
      onMouseOut={this.handleMouseOut.bind(this)} />
    )
  }
}
