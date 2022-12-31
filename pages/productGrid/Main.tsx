import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Image from 'next/image';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons';

import { FaBeer } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const numbers = [1, 2, 3, 4, 5,6,7,8,9,10,11,12];


export default function ProductGrid() {
  // React.useEffect(()=>{
  //   var cardIcon = window.document.getElementById('cardIcon');
  //   cardIcon?.addEventListener('onmouserover',()=>{
  //     console.log('o')
  //   })
  // console.log(cardIcon)
  // },[])




  return (
    <Box>
    <Typography variant='h6' sx={{ textAlign: 'center' }}>Featured Products</Typography>
      <Box sx={{ flexGrow: 1, width: '90%', margin: '0 auto' }}>

        <Grid container spacing={2}>
        {
        numbers.map((number)=>{
      
        return(
          <Grid item xs={6} md={8} lg={3}>
            <Card sx={{ maxWidth: 345,cursor:'pointer' }}>
              <CardMedia
                sx={{ height: 250 }}
                image="/images/tshirt.jpg"
                title="green iguana"
                />
              <CardContent>
                <Typography sx={{ color: '#858585',fontSize:'13px' }}>Men Category</Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{fontSize:'17px'}}>
                  Men's tshirt
                </Typography>
                <Box sx={{ display: 'flex' ,alignItems:'center', gap:'5px'  }}>
                  <Typography sx={{ display: 'inline', color: '#858585', fontSize:'13px',textDecoration: "line-through"}}>
                    Rs.1560
                  </Typography>
                  <Typography sx={{ display: 'inline',fontSize:'17px' }}>
                    Rs.1200
                  </Typography>
                </Box>

              </CardContent>
              <CardActions sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                <Button size="medium" sx={{
                  border:'1px solid black',
                  borderRadius:'none',
                  padding:'5px 30px',
                  color:'black',
                  width:'100%',
                  '&:hover': {
                    backgroundColor: '#000',
                    color: '#fff',
                }
                  }}>ADD TO CART</Button>
          
           
              
            </CardActions>
            <Box sx={{padding:'8px 8px 20px 8px'}}>
            <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
            </Box>
            
      
            </Card>
          </Grid>

        )
        })
       
     }

          

       
          
          
        </Grid>
      </Box>
    </Box>
  );
}