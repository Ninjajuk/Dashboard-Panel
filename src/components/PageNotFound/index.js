import React from 'react'
import { ErrorCard, ErrorTextFooter, ErrorTextHeader, ErrorWrapper } from './ErrorPageElement';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { CommonButton, CommonLink } from '../common';


export const PageNotFound = () => {
  return (
    <>
      <ErrorWrapper>
        <ErrorCard>
          <CardContent>
            <ErrorTextHeader gutterBottom variant="h2" component="div">
              404
            </ErrorTextHeader>
            <ErrorTextFooter variant="body2" color="text.secondary">
              Page Not Found...
            </ErrorTextFooter>
          </CardContent>
          <CardActions sx={{justifyContent: "center"}}>
            <CommonLink to={"/"}>
              <CommonButton size="small">
                Go Home
              </CommonButton>
            </CommonLink>
          </CardActions>
        </ErrorCard>
      </ErrorWrapper>
    </>
  )
}
