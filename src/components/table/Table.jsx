import React from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ListTable = () => {
    const rows = [
        {
            id:123843,
            product:'Acer Nitro 4',
            img:'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/2067711/1.jpg?7820',
            customer: 'John Thomas',
            date: '09 March',
            amount: 3432,
            method: 'Cash on Delivery',
            status:'Approved',

        },
        {
            id:123090,
            product:'Play Station 5',
            img:'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/124177/1.jpg?7875',
            customer: 'John Henry',
            date: '09 May',
            amount: 900,
            method: 'Online Payment',
            status:'Pending',

        },
        {
            id:123843,
            product:'Red Dragon 3',
            img:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/8741121/1.jpg?9132',
            customer: 'Rudiger German',
            date: '11 September',
            amount: 433,
            method: 'Cash on Delivery',
            status:'Approved',

        },
        {
            id:143843,
            product:'Cristiano Ronaldo',
            img:'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/7634811/1.jpg?8079',
            customer: 'CR7',
            date: '14 Feb',
            amount: 1122,
            method: 'Online',
            status:'Pending',

        },
        {
            id:188553,
            product:'Lionel Messi',
            img:'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/2067711/1.jpg?7820',
            customer: 'LM10',
            date: '03 June',
            amount: 902,
            method: 'Cash on Delivery',
            status:'Approved',

        },
    ]
  return (
     <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              >
              <TableCell> {row.id}   </TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ListTable