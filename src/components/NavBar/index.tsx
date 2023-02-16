import * as React from 'react';
import './NavBar.css';

const Navbar: React.FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <header>
        <div className="heading">
          <h2>The Artifact</h2>
          <h4>
            <em> Culture </em>& <em>Art</em> Blog
          </h4>
        </div>
      </header>
      <div className="navBar">
        <nav>
          <a href="#">Blog</a>
          <a href="#">About</a>
          <a className="contactLink" href="#">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
