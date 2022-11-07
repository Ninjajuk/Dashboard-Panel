import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CalendarMonthRounded } from '@mui/icons-material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { CountFont, HeaderFont, PercentFont, Percentage } from './HomeElement';

export default function DashboardCard({ header = "-", count = "0", duration = "-", percentage = "0", arrow = "up", icon }) {

    return (
        <Card sx={{ display: 'flex', width: 380, justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <HeaderFont>{header}</HeaderFont>
                    <CountFont>{count}</CountFont>
                    <PercentFont>
                        <Percentage arrow={arrow}>
                            {arrow === "up" ? <ArrowUpwardIcon color='success' /> : <ArrowDownwardIcon color='error' />}
                            {percentage}% &nbsp;
                        </Percentage> 
                        {duration}
                    </PercentFont>
                </CardContent>
            </Box>
            <Box
                sx={{ width: 70, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                {icon}
            </Box>
        </Card>
    );
}
