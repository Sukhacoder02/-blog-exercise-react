import * as React from 'react';
import { Navbar } from '../../components';
import { Footer } from '../../components';
import './PageNotFound.css';

const PageNotFound: React.FC = (): JSX.Element => {
  return (
    <div className="body">
      <Navbar />
      <div id="main">
        <div className="pageNotFound">
          <h1>404</h1>
          <h2>Page Not Found</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default PageNotFound;
