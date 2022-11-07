import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#D7DCF0',
        fontWeight: '600',
        fontSize: 14,
        fontFamily: 'inherit',
        color: '#555',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        fontFamily: 'inherit',
        color: '#666',
        fontWeight: '500',
    },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(order, customer, item, status, action) {
    return { order, customer, item, status, action };
}

const rows = [
    createData('RA0449', 'Udin Wayang', 'Nassi Padang', 'Delivered', 'Detail'),
    createData('RA5324', 'Jaenab Bajigur', `Gundam 90' Edition`, 'Shipping', 'Detail'),
    createData('RA8568', 'Rivat Mahesa', 'Oblong T-Shirt', 'Pending', 'Detail'),
    createData('RA1453', 'Indri Junanda', 'Hat Rounded', 'Processing', 'Detail'),
    createData('RA1998', 'Udin Cilok', 'Baby Powder', 'Delivered', 'Detail'),
];

const getStatusColor = (status) => {
    if (status === "Delivered") {
        return "green"
    } else if (status === "Shipping") {
        return "orange"
    } else if (status === "Pending") {
        return "red"
    } else if (status === "Processing") {
        return "skyblue"
    }
}

const buttonStyle = {
    backgroundColor: 'purple',
    padding: '4px 8px',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '14px',
    fontFamily: 'inherit'
}

export default function InvoiceTables() {
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 750 }} component={Paper}>
                <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Order ID</StyledTableCell>
                            <StyledTableCell>Customer</StyledTableCell>
                            <StyledTableCell>Item</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.order}>
                                <StyledTableCell component="th" scope="row">
                                    <span style={{color: 'purple'}}>
                                    {row.order}
                                    </span>
                                </StyledTableCell>
                                <StyledTableCell>{row.customer}</StyledTableCell>
                                <StyledTableCell>{row.item}</StyledTableCell>
                                <StyledTableCell>
                                    <span style={{ backgroundColor: getStatusColor(row.status), color: '#fff', padding: '2px', borderRadius: '2px' }}>
                                        {row.status}
                                    </span>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <button style={buttonStyle}>
                                        {row.action}
                                    </button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
