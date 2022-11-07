import React from 'react'

const BasicForm = () => {

  return (
    <>
    <div className=" w-full text-xl font-bold pl-5 pr-5 mt-5 border">
    <h1 className=" text-xl font-bold mb-2 border-bottom">Basic info</h1>
   <form className="w-full pl-5  ">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 pr-1" >
      <label className="block   text-l  mb-2" for="grid-first-name">
        First Name
      </label>
      <input className=" block w-full text-base font-normal   border  rounded py-3 px-4 mb-3 "  type="text" placeholder="Enter client first name"/>
  
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block   text-l  mb-2" for="grid-last-name">
        Last Name
      </label>
      <input className=" block w-full text-base font-normal bg-white-200  border  rounded py-3 px-4 leading-tight  focus:bg-white "  type="text" placeholder="Enter client last name"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block   text-l  mb-2" for="grid-last-name">
      Mobile Number
      </label>
      <input className=" block w-full text-base font-normal bg-white-200  border  rounded py-3 px-4  "  type="text" placeholder="Enter client Mobile number"/>
    </div>
   
    <div className="w-1/2 px-3">
      <label className="block   text-l  mb-2" for="grid-last-name">
        Email Address
      </label>
      <input className=" block w-full text-base font-normal border p-3"  type="text" placeholder="Enter email address"/>
    </div>
    <div className="w-full  px-3">
      <label className="block   text-l  mt-2 mb-2" for="grid-last-name">
        Gender
      </label>
      <div class="relative">
      <select class="block appearance-none w-full bg-white-200 border border-gray-200 text-base font-normal py-3 px-4 pr-8 rounded leading-tight  focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
      
    </div>
    <div className="w-full md:w-1/2 px-3 mt-5 mb-6 md:mb-0">
      <label className="block tracking-wide  text-l mb-2" for="grid-first-name">
        Date of Birth
      </label>
      <input className="appearance-none block w-full text-base font-normal bg-white-200  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight  focus:bg-white"  type="text" placeholder="Day and Month"></input>
    
    </div>
    <div className="w-full mt-5 md:w-1/2 px-3">
      <label className="block tracking-wide  text-l  mb-2" for="grid-last-name">
        Year
      </label>
      <input type="text" className=" block w-full text-base font-normal bg-white-200  border  rounded py-3 px-4 leading-tight  focus:bg-white focus:border-gray-500"  placeholder="Year"/>
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-purple-500 mb-5 hover:bg-purple-400 focus:shadow-outline  text-white font-bold py-2 px-4 rounded" type="button">
        Sign Up
      </button>
    </div>
  </div>
</form>
    </div>
   
    </>
  );
};

export default BasicForm;