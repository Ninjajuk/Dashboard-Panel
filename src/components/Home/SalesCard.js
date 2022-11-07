import React from 'react'
import { CommonButton } from '../common';
import { ProgressBarText, ProgressBarWrapper, SalesCard, CardHeader, SalesContent, SalesFooter } from './HomeElement'
import CustomizedProgressBars from './progressBar';

const Sales = () => {
    return (
        <SalesCard sx={{ maxHeight: 380 }}>
            <CardHeader color='purple' buttonColor='purple'>
                <span>Products Sold</span>
                <CommonButton>
                    Month
                </CommonButton>
            </CardHeader>
            <SalesContent>
                <ProgressBarWrapper>
                    <ProgressBarText>
                        <span>Oblong T-Shirt</span>
                        <span>600 of 800 items</span>
                    </ProgressBarText>
                    <CustomizedProgressBars count={70} />
                </ProgressBarWrapper>
                <ProgressBarWrapper>
                    <ProgressBarText>
                        <span>Gundam 90'Edition</span>
                        <span>500 of 800 items</span>
                    </ProgressBarText>
                    <CustomizedProgressBars count={50} />
                </ProgressBarWrapper>
                <ProgressBarWrapper>
                    <ProgressBarText>
                        <span>Rounded Hat</span>
                        <span>455 of 800 items</span>
                    </ProgressBarText>
                    <CustomizedProgressBars count={40} />
                </ProgressBarWrapper>
                <ProgressBarWrapper>
                    <ProgressBarText>
                        <span>Indomie Gorang</span>
                        <span>400 of 800 items</span>
                    </ProgressBarText>
                    <CustomizedProgressBars count={30} />
                </ProgressBarWrapper>
                <ProgressBarWrapper>
                    <ProgressBarText>
                        <span>Remote Control Car Racing</span>
                        <span>200 of 800 items</span>
                    </ProgressBarText>
                    <CustomizedProgressBars count={20} />
                </ProgressBarWrapper>
            </SalesContent>
            <SalesFooter>
                <button>View More</button>
            </SalesFooter>
        </SalesCard>
    )
}

export default Sales