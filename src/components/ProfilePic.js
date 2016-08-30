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
    this.setState({imgSrc: "http://images.designntrend.com/data/images/full/72810/one-punch-man.jpg?w=780"});
  }

  handleMouseOut() {
    this.setState({imgSrc: "http://bunchhieng.github.io/webpage/Images/BUN.jpg"});
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
