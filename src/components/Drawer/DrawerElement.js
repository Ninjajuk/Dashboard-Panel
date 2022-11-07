import { Box, ListItemText, Drawer, Divider } from "@mui/material";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const DrawerWrapper = styled(Drawer)`
    max-width: 250px;
    .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop{
        background-color: unset !important;
        max-width: 250px;
    }
    .css-4t3x6l-MuiPaper-root-MuiDrawer-paper{
        top: 63px;
        z-index: 1200;
        ${props => window._env.footer && `
            height: calc(100% - 128px);
        `}
    }
`

export const DrawerBox = styled(Box)`
    color: #fff;
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .css-h4y409-MuiList-root{
        width: 100%;
    }
    ul li a {
        width: 100%;
        box-sizing: border-box;
        padding: 5px 32px;
        padding-right: 10px;
    }
    ul li a.active{
        color: #555;
    }
   
        
    
`

export const DrawerDivider = styled(Divider)`
    height: 0.4px;
    width: 100%;
    color: #777;
`

export const LinkItemText = styled(ListItemText)`
    .css-10hburv-MuiTypography-root {
        font-family: inherit;
        font-size: 14px;
        :hover {
            transition: all 225ms ease;
        }
        transition: all 225ms ease;
    }
`

export const LinkItem = styled(NavLink)`
    text-decoration: none;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
    color: #999;
    :hover {
        color: rgba(0, 0, 0, 0.5);
        background-color: #999;
        border-radius: 5px;
    }
`

export const DashboardBox = styled(Box)`
    height: 50px;
    box-sizing: border-box;
    width: 100%;
    padding: 5px 32px;
    padding-right: 0;
    display: flex;
    justify-content: start;
    text-align: center;
    align-items: center;
    gap: 5px;
    .header-top {
        color: #777;
        text-transform: capitalize;
        font-size: 14px;
        font-weight: bold;
    }
    .header{
        color: #999;
        text-transform: uppercase;
        letter-spacing: 4px;
        font-weight: 500;
    }
    .header-simple {
        color: #999;
        text-transform: capitalize;
    }
`