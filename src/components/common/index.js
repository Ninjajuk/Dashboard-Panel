import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const ContentContainer = styled.div`
    width: 100vw;
    display: grid;
    ${() => window._env.FOOTER && `
        height: calc(100vh - 128px);
    `}
    ${props => props.drawerState && `
        width: calc(100vw - 250px);
        margin-left: 250px;
        transition: all 225ms ease;
    `}
    transition: all 225ms ease;
`


export const CommonButton = styled(IconButton)`
    text-transform: none !important;
    color: #fff !important;
    font-family: inherit !important;
    z-index: 1201;
`

export const CommonLink = styled(Link)`
    text-decoration: none;
    padding: 6px 8px;
`