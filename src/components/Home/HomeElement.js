import { Card } from "@mui/material";
import styled from "styled-components";

export const DashboardWrapper = styled.div`
    width: 100%;
    margin: 10px;
`

export const DashboardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 18px;
    margin-right: 32px;
    .header{
        font-size: 22px;
        font-weight: 500;
        color: #777;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
     grid-template-columns: repeat(4, 1fr);
    margin: 18px;
    gap: 20px;
`

export const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 2.5fr;
    margin: 18px;
    gap: 20px;
`

export const PercentFont = styled.span`
    font-size: 12px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const Percentage = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.arrow === "up" ? `
        color: green;
        `
        : `
        color: red;
        `
    }
`

export const HeaderFont = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #777;
    text-transform: uppercase;
`
export const CountFont = styled.h3`
    font-size: 20px;
    font-weight: 500;
    color: #777;
    margin: 8px auto;
`

export const SalesCard = styled(Card)`
    padding: 20px;
`

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    span {
        font-size: 16px;
        color: ${props => props.color};
        text-transform: capitalize;
        font-weight: 500;
    }
    button {
        background-color: ${props => props.buttonColor};
        border: none;
        border-radius: 4px;
        padding: 6px 14px;
        font-size: 14px;
        font-family: inherit;
        color: #fff;
        cursor: pointer;
    }
    button: hover {
        background-color: ${props => props.buttonColor};
    }
`

export const SalesContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProgressBarWrapper = styled.div`
    margin: 10px 0;
`

export const ProgressBarText = styled.div`
    display: flex;
    justify-content: space-between;
    span {
        color: grey;
    }
`

export const SalesFooter = styled.div`
    height: 10px;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        border: none;
        background-color: unset;
        color: purple;
        font-size: 12px;
        font-family: inherit;
        font-weight: 500;
    }
`

export const InvoiceCard = styled(Card)`
    padding: 20px;
`

export const InvoiceTableWrapper = styled.div`
    margin: 10px 0;
`