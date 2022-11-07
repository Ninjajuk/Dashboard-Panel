import React from 'react'

import DashboardCard from './DashboardCard'
import { CardWrapper, DashboardHeader, DashboardWrapper, ProductWrapper } from './HomeElement'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupsIcon from '@mui/icons-material/Groups';
import ForumIcon from '@mui/icons-material/Forum';
import SalesCard from './SalesCard';
import Invoice from './InvoiceCard';
import Navbar from '../Navbar/index';
import AppDrawer  from '../Drawer/index';

 const Home = () => {
  return (
    <>
      <div >
        <Navbar />
      </div>
      <div className="flex flex-row" style={{ width: "100%", height: "auto" }}>
        <div style={{ width: "250px", height: "auto",overflow:'hidden' }}>
          {/* <SideBar /> */}
        </div>
        <div
          style={{
            width: "calc(100% - 250px)",
            height: "auto",
            marginBottom: "5px",
            overflow:'hidden'
          }}
        >
          <DashboardWrapper>
            <DashboardHeader>
              <span className="header">Dashboard</span>
              <h3>Home / Dashboard</h3>
            </DashboardHeader>
            <CardWrapper>
              {/* -----------can also be done using map---------- */}
              <DashboardCard
                header="Earnings (Monthly)"
                count="$40,000"
                percentage="3.48"
                duration="Since last month"
                icon={<CalendarTodayIcon fontSize="large" color="secondary" />}
              />
              <DashboardCard
                header="Sales"
                count="650"
                percentage="12"
                duration="Since last year"
                icon={<ShoppingCartIcon fontSize="large" color="success" />}
              />
              <DashboardCard
                header="New User"
                count="366"
                percentage="20.4"
                duration="Since last month"
                icon={<GroupsIcon fontSize="large" color="primary" />}
              />
              <DashboardCard
                header="Pending requests"
                count="18"
                percentage="1.10"
                duration="Since yesterday"
                arrow="down"
                icon={<ForumIcon fontSize="large" color="warning" />}
              />
            </CardWrapper>
            <ProductWrapper>
              <SalesCard />
              <Invoice />
            </ProductWrapper>
          </DashboardWrapper>
        </div>
      </div>
    </>
  );
}
export default Home;