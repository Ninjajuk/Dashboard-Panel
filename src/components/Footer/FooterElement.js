import styled from "styled-components";


export const FooterWrapper = styled.footer`
    position: relative;
    box-shadow: 0px 2px 7px 9px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 2px 4px -1px rgb(0 0 0 / 12%);
    bottom: 0;
    width: 100vw;
    height: 64px;
    background-color: #1d1d1d;
    z-index: 1201;
`

export const FooterBody = styled.div`
    height: 100%;
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const PrivacyPolicy = styled.span`
    font-size: 14px;
    padding: 6px 8px;
`

export const SocialMediaWrapper = styled.span`
    padding: 6px 8px;
    display: flex;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    .css-i4bv87-MuiSvgIcon-root{
        cursor: pointer;
    }
`