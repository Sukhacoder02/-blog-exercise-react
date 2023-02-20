import * as React from 'react';
import './BlogPage.css';

import { Navbar, Footer, MainDiv } from '../../components';

const BlogPage = () => {
  return (
    <div className="body">
      <Navbar />
      <MainDiv />
      <Footer />
    </div>
  );
};
export default BlogPage;
