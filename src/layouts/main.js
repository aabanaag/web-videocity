import React from 'react';
import Header from '../components/Header';

const MainLayout = (props) => (
  <div className="main-layout container-fluid">
    <Header title="Video City" />
    {props.children}
  </div>
);

export default MainLayout;