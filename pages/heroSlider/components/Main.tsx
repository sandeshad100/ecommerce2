import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { url } from "inspector";
import Image from 'mui-image';
import $ from 'jquery';


export default class HeroSliderMain extends Component {
    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };

        const display_center = {
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
        }
        
        const slide_image = {
            objectFit:"cover",
             height: "100vh", 
             width:"100%"
        }
       

        return (
            <Box sx={{width:1}}>
                <Slider {...settings }>
                    <Box sx={{ width: '100%'}}>
                        <img
                        src="/images/heroimgtv.jpg"
                        alt="Picture of the author"
                        style={{
                        objectFit:'cover',
                        height: '400px', 
                        width:'100%'
                    }}  
                        />
                        
                    </Box>

                    <Box sx={{ width: 1 }}>
                    <img
                        src="/images/heroimg.jpg"
                        alt="Picture of the author"
                        style={{
                        objectFit:'cover',
                        height: '400px', 
                        width:'100%'
                    }}  
                        />
                        
                    </Box>
                    <Box sx={{ width: 1 }}>
                    <img
                        src="/images/heroimgappliance.jpg"
                        alt="Picture of the author"
                        style={{
                        objectFit:'cover',
                        height: '400px', 
                        width:'100%'
                    }}  
                        />
                        
                    </Box>
                    <Box sx={{ width: 1 }}>
                    <img
                        src="/images/heroimgtv.jpg"
                        alt="Picture of the author"
                        style={{
                        objectFit:'cover',
                        height: '400px', 
                        width:'100%'
                    }}  
                        />
                        
                    </Box>
                   
                    <Box sx={{ width: 1 }}>
                    <img
                        src="/images/heroimg.jpg"
                        alt="Picture of the author"
                        style={{
                        objectFit:'cover',
                        height: '400px', 
                        width:'100%'
                    }}  
                        />
                        
                    </Box>
                </Slider>
            </Box>

        );
    }
}
