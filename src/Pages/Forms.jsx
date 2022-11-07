import React from 'react'
import Navbar from '../components/Navbar/index'
// import SideBar from '../components/SideBar';
import BasicForm from './BasicForm';

const Forms = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row">
        <div style={{ width: "250px", height: "auto" }}>
          {/* <SideBar /> */}
        </div>
        <div style={{ width: "calc(100% - 250px)", height: "auto" }}>
          <BasicForm />
        </div>
      </div>
    </>
  );
}

export default Forms;