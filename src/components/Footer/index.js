import React from 'react'
import { FooterBody, FooterWrapper, PrivacyPolicy, SocialMediaWrapper } from './FooterElement'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
  const footer = window._env.FOOTER;
  return (
    <>
      {footer &&
        <FooterWrapper>
          <FooterBody>
            <PrivacyPolicy>Privacy Policy &copy; {new Date().getFullYear()} Yogi's World.</PrivacyPolicy>
            <SocialMediaWrapper>
              <FacebookOutlinedIcon />
              <LinkedInIcon />
              <TwitterIcon />
            </SocialMediaWrapper>
          </FooterBody>
        </FooterWrapper>}
    </>
  )
}
