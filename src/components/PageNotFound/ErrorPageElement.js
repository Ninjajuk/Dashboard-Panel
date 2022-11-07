import { Card, Typography } from "@mui/material";
import styled from "styled-components";

export const ErrorWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .css-bhp9pd-MuiPaper-root-MuiCard-root{
        background-color: #1d1d1d;
        color: #fff;
        box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 50%);
    }
`

export const ErrorCard = styled(Card)`
    width: 350px;
` 
export const ErrorTextHeader = styled(Typography)`
    text-align: center;
`
export const ErrorTextFooter = styled(Typography)`
    text-align: center;
    font-size: 18px !important;
    color: #fff !important;
    font-family: inherit !important;
`