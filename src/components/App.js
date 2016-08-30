import React from 'react';
import ReactDOM from 'react-dom';
import { Link }  from 'react-router';
import Footer from './Footer';
import ProfilePic from './ProfilePic';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ProfilePic src={"../../public/img/Bun.jpg"} />
        <div id="myName">
          <h4>Bunchhieng Soth</h4>
          <hr/>
          <p>B.S. in Computer Science, Minor in Math</p>
          <p>University of Massachusetts Lowell</p>
          <a href="https://drive.google.com/open?id=1V4Bk5GZO2_waXtd2OTtcJfa7OmNVWRV4XLgepeM7dps">Resume</a>
        </div>
        <ul role="nav">
          <li><Link to="/" onlyActiveOnIndex>Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
        <Footer />
        {this.props.children}
      </div>
    );
  }
}
