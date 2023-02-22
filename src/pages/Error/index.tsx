import * as React from 'react';
import { Navbar } from '../../components';
import { Footer } from '../../components';
import { useParams } from 'react-router-dom';
import './Error.css';

const Error: React.FC = (): JSX.Element => {
  const { statusCode } = useParams();
  return (
    <div className="body">
      <Navbar />
      <div id="main">
        <div className="errorDiv">
          <h2>Something went wrong</h2>
          {statusCode && <p>HTTP Status Code: {statusCode}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
