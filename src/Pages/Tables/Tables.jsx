import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 50,color:'primary' },
  { id: 'position', label: 'Position', minWidth: 50,align: 'left', },
  {
    id: 'office',
    label: 'Office',
    minWidth: 60,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'age',
    label: 'Age',
    minWidth: 5,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'startdate',
    label: 'Startdate',
    minWidth: 50,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'salary',
    label: 'Salary',
    minWidth: 50,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, position, office,age,startdate,salary) {

  return { name, position, office, age, startdate,salary };
}

const rows = [
  createData('Jon Snow', 'Accountant', 'Tokyo',65,2008-11-28,12500 ),
  createData('Cersei Lannister','CEO', 'London', 47, 2008/11/28,12500 ),
  createData('Jaime Lannister','Frontend', 'San Franscisco', 66, 2008/11/28,12500 ),
  createData('Arya Stark States','Backend', 'London', 41, 2008/11/28,12500 ),
  createData('Daenerys Targaryen','Backend', 'New York', 28, 2008/11/28,12500 ),
  createData('Melisandre','Backend', 'London', 61, 2008/11/28,12500 ),
  createData('Ferrara Clifford','Frontend', 'New York', 30,2008/11/28,12500 ),
  createData('Rossini Frances','CEO', 'London', 48, 2008/11/28,12500 ),
  createData('Harvey Roxie','Frontend', 'New York', 51,2008/11/28,12500 ),
  createData('Mo Salah','Accountant', 'London', 31, 2008/11/28,12500 ),
  createData('Lionel Messi', 'New York', 37, 2008/11/28,12500 ),
  createData('Sachin Tendulkar', 'London', 57, 2008/11/28,12500 ),
  createData('MS Dhoni', 'New York',44, 2008/11/28,12500 ),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper >
      <TableContainer sx={{ maxHeight: 'auto', }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell 
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth,backgroundColor:'grey' }}
                  sx={{color:'primary' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <div className='float-left mt-2 '>
          <p>Showing 1 to 10 of 57</p>
        </div>
        <div className=' float-right border text-center mt-2'>
        <button className=' pt-1 px-3 text-blue-700 font-bold border' >Previous</button>
        <button className='bg-[purple] border pt-1 px-3   text-blue-700 font-bold'>1</button>
        <button className=' pt-1 px-3 border  text-blue-700 font-bold'>2</button>
        <button className=' pt-1 px-3  border   text-blue-700 font-bold'>3</button>
        <button className=' pt-1 px-3 border  text-blue-700 font-bold'>4</button>
        <button className=' pt-1 px-3 border  text-blue-700 font-bold'>5</button>
        <button className=' pt-1 px-3 border  text-blue-700 font-bold'>6</button>
        <button className=' pt-1 px-3 border  text-blue-700 font-bold'>Next</button>
          

        </div>
      </div>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
      
        
      /> */}
    </Paper>
  );
}
