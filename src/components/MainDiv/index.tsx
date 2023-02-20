import * as React from 'react';
import Cards from './../Cards';
import './MainDiv.css';

const MainDiv: React.FunctionComponent = (): JSX.Element => {
  return (
    <div id="main">
      <Cards />
    </div>
  );
};
export default MainDiv;
