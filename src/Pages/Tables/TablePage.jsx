import React from 'react'
import Navbar from '../../components/Navbar/index'

// import SideBar from '../../components/SideBar';
import Tables from './Tables'
const TablePage = () => {
  return (
    <>
      <div style={{width:'100%',height:'64px',backgroundColor:'purple'}}>
        <Navbar/>
      </div>
      <div className='flex flex-row'>
        <div style={{width:'250px',height:'auto'}}>
          {/* <SideBar /> */}
        </div>
        <div style={{width:'calc(100% - 250px)',height:'auto',marginBottom:'5px'}}>
            <div className='float-left pl-2 font-bold'> <h1>Data Tables</h1></div>
            <div className='float-right pr-2'> <h1><strong className='text-blue-600'>Home</strong>/Tables/ Data Tables</h1></div>
                <h1 className=' text-blue-700 font-bold mt-7 pt-10 pl-2  '>Data Tables</h1>
              <div className='float-left pl-2 mt-7'>
                <label className='pr-2 '>Show</label>
               <input className='border-2 border-black w-2px' type='number' placeholder='10' active/>
               <span className=' pl-2'>entries</span>
              </div>
              <div className='float-right  pr-2 mt-7 pt-25'>
                <label className='p-5 text-c ml-50 '>Search :</label>
                <input type='search' className='border-2 border-black pl-4 w-1px float-right '></input>
              </div>
          
          <Tables />
        </div>
      </div>
    </>
  );
}

export default TablePage;