import { Box, ButtonBase, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import logo from '../img/logo.png'
import Paper from '@mui/material/Paper';

function Head() {


  return (
    <Stack>
      <Stack sx={{
        maxWidth: 500,
        position: "absolute",
        zIndex: "1",
        position: 'fixed'
      }}>
      <img alt='' src={logo}/>
      </Stack>

      <Stack sx={{ 
          width: '100%', 
          height: 130, 
          bgcolor: '#D9D9D9',
          marginTop: '70px',
          position: 'fixed'
          }}>
                 
      </Stack> 
    </Stack>
  )
}

export default Head