import React from 'react';
import ReactDOM from 'react-dom';

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
      <img src={this.state.imgSrc} style={imgStyle}
      alt="Profile Picture"
      onMouseOver={this.handleMouseOver.bind(this)}
      onMouseOut={this.handleMouseOut.bind(this)} />
    )
  }
}

let imgStyle = {
  width: 200,
  height: 200
};
