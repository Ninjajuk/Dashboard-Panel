import React from 'react';
import { Box } from '@mui/material';
import { HomeLink, HeaderWrapper, DashboardWrapper } from "./NavbarElement";
import AppBar from './Appbar';

const Navbar = (props) => {

  const { COMPANY_NAME } = window._env;

  return (
    <Box>
      <HeaderWrapper position='static'>
        <DashboardWrapper>
          <HomeLink to={"/"}>{COMPANY_NAME}</HomeLink>
        </DashboardWrapper>
        <AppBar setDrawerState={props.setDrawerState} />
      </HeaderWrapper>
    </Box>
  )
}
export default Navbar;