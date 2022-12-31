import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { Avatar } from '@mui/material';
import { Typography } from '@mui/material';
import { display } from '@mui/system';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const categoryGrid = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'center',
  flexDirection: 'column'

};

const category_name = {
  mt:1,
  textAlign:'center'
}

export default function Category() {
  return (
   <Box sx={{ display:'flex',gap:3, justifyContent: 'center', flexWrap:'wrap',mb:5 }}>
     <Box sx={{ display:'flex',flexDirection:'column', mt: 5,justifyContent: 'center' }}>
            <Box>
              <Avatar alt="Remy Sharp" src="/images/laptop.png" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Laptop</Typography>
            </Box>
     
    </Box>
    <Box sx={{ display:'flex',flexDirection:'column', mt: 5, }}>
     <Box >
              <Avatar alt="Remy Sharp" src="/images/facewash.png" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Books</Typography>
            </Box>
     
    </Box>
    <Box sx={{ display:'flex',flexDirection:'column', mt: 5, }}>
     <Box >
              <Avatar alt="Remy Sharp" src="/images/beauty.jpg" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Beauty</Typography>
            </Box>
     
    </Box>
    <Box sx={{ display:'flex',flexDirection:'column', mt: 5, }}>
     <Box >
              <Avatar alt="Remy Sharp" src="/images/fashion.jpg" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Fashion</Typography>
            </Box>
     
    </Box>
    <Box sx={{ display:'flex',flexDirection:'column', mt: 5 }}>
            <Box >
              <Avatar alt="Remy Sharp" src="/images/furniture.png" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Furniture</Typography>
            </Box>
     
    </Box>
    <Box sx={{ display:'flex',flexDirection:'column', mt: 5, }}>
     <Box >
              <Avatar alt="Remy Sharp" src="/images/grocery.jpg" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Grocery</Typography>
            </Box>
     
    </Box>
    <Box sx={{ display:'flex',flexDirection:'column', mt: 5, }}>
     <Box >
              <Avatar alt="Remy Sharp" src="/images/laptop.png" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Laptop</Typography>
            </Box>
     
    </Box>
    <Box sx={{ display:'flex',flexDirection:'column', mt: 5, }}>
            <Box >
              <Avatar alt="Remy Sharp" src="/images/furniture.png" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Furniture</Typography>
            </Box>
     
    </Box>
    <Box sx={{ display:'flex',flexDirection:'column', mt: 5, }}>
     <Box >
              <Avatar alt="Remy Sharp" src="/images/laptop.png" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Laptop</Typography>
            </Box>
     
    </Box>
    <Box sx={{ display:'flex',flexDirection:'column', mt: 5, }}>
    <Box >
              <Avatar alt="Remy Sharp" src="/images/books.png" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Books</Typography>
            </Box>
     
    </Box>
    <Box sx={{ display:'flex',flexDirection:'column', mt: 5, }}>
    <Box >
              <Avatar alt="Remy Sharp" src="/images/grocery.jpg" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Grocery</Typography>
            </Box>
     
    </Box>
    <Box sx={{ display:'flex',flexDirection:'column', mt: 5, }}>
    <Box >
              <Avatar alt="Remy Sharp" src="/images/fashion.jpg" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Fashion</Typography>
            </Box>
     
    </Box>
   </Box>
   


  );
}