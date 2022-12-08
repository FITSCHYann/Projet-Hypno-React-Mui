import { Box, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import imgPampa from '../img/pampa.jpg'

function Home() {
  return (
    <Box id='Accueil' sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "100%",
      height: "100vh",
    }}>
        <Stack 
          sx={{
          
              }}> 
            <Card sx={{ maxWidth: { xs: 345, sm: 500 }, marginTop: "20vh"}}>
                <CardMedia
                    component="img" 
                    height="250"
                    image={imgPampa}
                    backgroundSize="cover"
                  />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Accueil
        </Typography>
        <Typography variant="body2" color="text.secondary">
        New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme l'Empire State Building et l'immense Central Park. Le théâtre de Broadway est situé sur Times Square.
        </Typography>
      </CardContent>
      <CardActions sx={{
        display: "flex",
        justifyContent: "center",
      }}>
      </CardActions>
    </Card>

      </Stack>
    </Box>
  )
}

export default Home