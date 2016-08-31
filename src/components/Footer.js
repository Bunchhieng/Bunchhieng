import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
           <p className="text-muted">Made with ❤ using React</p>
         </div>
        </footer>
      </div>
    );
  }
}
