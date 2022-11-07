import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { DrawerBox, LinkItemText, DrawerWrapper, LinkItem, DashboardBox, DrawerDivider } from './DrawerElement';
import { data } from "./DrawerUtils";
import { CommonButton } from '../common';
import MenuIcon from '@mui/icons-material/Menu';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

 const AppDrawer = (props) => {

    const [drawerState, setDrawerState] = useState(window._env.DRAWER_OPEN);

    const toggleDrawer = (open) => {
        setDrawerState(open);
        props.setDrawerState(open);
    };

    const list = () => (
        <div  style={{width:'250px',height:'auto'}}>
               <DrawerBox
            role="presentation"
        >
            <DashboardBox>
                <SpeedOutlinedIcon color={'action'} />
                <span className='header-top'>Dashboard</span>
            </DashboardBox>
            <DrawerDivider />
            <List>
                <DashboardBox>
                    <span className='header'>features</span>
                </DashboardBox>

                {data.features.map(({ text, path, icon, subMenu }, index) => (
                    <ListItem key={index} disablePadding onClick={() => toggleDrawer(false)}>
                        <LinkItem to={`/${path}`}>
                            {icon}
                            <LinkItemText primary={text} />
                            {subMenu.length > 0 && <ChevronRightIcon color='action' />}
                        </LinkItem>
                    </ListItem>
                ))}
            </List>
            <DrawerDivider />
            <List>
                <DashboardBox>
                    <span className='header'>examples</span>
                </DashboardBox>
                {data.examples.map(({ text, path, icon, subMenu }, index) => (
                    <ListItem key={index} disablePadding onClick={() => toggleDrawer(false)}>
                        <LinkItem to={`/${path}`}>
                            {icon}
                            <LinkItemText primary={text} />
                            {subMenu.length > 0 && <ChevronRightIcon color='action' />}
                        </LinkItem>
                    </ListItem>
                ))}
            </List>
            <DrawerDivider />
            <DashboardBox>
                <span className='header-simple'>Version 1.1</span>
            </DashboardBox>
        </DrawerBox>
        </div>
     
    );
    return (
        <>
        <div style={{width:'150px',height:'auto'}}>
        <CommonButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={() => toggleDrawer(!drawerState)}
            >
                <MenuIcon />
            </CommonButton>
            <DrawerWrapper
                anchor={window._env.OPEN_DRAWER_FROM}
                open={drawerState}
                
            >
                {list('left')}
            </DrawerWrapper>
        </div>
           
        </>
    )
}
export default AppDrawer;