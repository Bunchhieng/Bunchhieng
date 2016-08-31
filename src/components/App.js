import React from 'react';
import ReactDOM from 'react-dom';
import { Link }  from 'react-router';
import Footer from './Footer';
import Clock from './Clock';
import ProfilePic from './ProfilePic';

const Active = { background: '#4bba67', color: '#fff' };

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ProfilePic src={"../../public/img/Bun.jpg"} />
        <div id="myName">
          <h4>Bunchhieng Soth</h4>
          <ul id="socialIcons">
            <li><a href="https://github.com/Bunchhieng" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a></li>
            <li><a href="https://www.linkedin.com/in/bunchhieng" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
            <li><a href="http://stackoverflow.com/users/2484238/bun" target="_blank"><i className="fa fa-stack-overflow" aria-hidden="true"></i></a></li>
          </ul>
          <Clock />
          <hr/>
          <p>B.S. in Computer Science, Minor in Math</p>
          <p>University of Massachusetts Lowell</p>
          <a href="https://drive.google.com/open?id=1V4Bk5GZO2_waXtd2OTtcJfa7OmNVWRV4XLgepeM7dps" target="_blank">Resume</a>
        </div>
        <ul role="nav" id="nav">
          <li><Link to="/" activeStyle={Active}><i className="glyphicon glyphicon-home"></i> <span>Home</span></Link></li>
          <li><Link to="/courses" activeStyle={Active}><i className="glyphicon glyphicon-book"></i> <span>Courses</span></Link></li>
          <li><Link to="/projects" activeStyle={Active}><i className="glyphicon glyphicon-console"></i> <span>Project</span></Link></li>
        </ul>
        {/* <Footer /> */}
        {this.props.children}
      </div>
    );
  }
}
