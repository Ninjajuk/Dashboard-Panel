

import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './components/Home/index'
import Forms from "./Pages/Forms";

import TablePage from "./Pages/Tables/TablePage";


function App() {
  window._env = {
    "FOOTER": false,
    "COMPANY_NAME": "Dashboard",
    "DRAWER_OPEN": true,
    "OPEN_DRAWER_FROM": "left",
  }
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="forms" element={<Forms/>} />
      <Route path="tables" element={<TablePage />} />
    </Routes>
  </BrowserRouter>,
    </>
  );
}

export default App;
