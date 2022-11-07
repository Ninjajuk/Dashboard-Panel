import styled from "styled-components";
import { AppBar, Divider, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled(AppBar)`
    // background-color: rgb(29 29 29 / 0%) !important;
    display: grid !important;
    grid-template-columns: 250px 1fr;
    background-color: purple !important;
    opacity: 1;
    transition: all 225ms ease !important;
`

export const DashboardWrapper = styled.div`
    width: 100%;
    background-color: #4472CA;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Header = styled(Toolbar)`
    background-color: #5E7CE2;
    justify-content: space-between;
    @media screen and (min-width: 600px) {
        padding-left: 32px !important;
        padding-right: 32px !important;
    }
`

export const HomeLink = styled(Link)`
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    z-index: 1201;
    padding: 6px 8px;
`
export const CustomDivider = styled(Divider)`
    height: 70% !important;
    padding: 0.3px;
    background-color: #fff;
` 