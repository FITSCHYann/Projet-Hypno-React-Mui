import { Box, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import imgFleur from '../img/fleur1.png'

function Hypnose() {
  return (
    <Box id='Hypnose' sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      minWidth: "100%",
      height: "100vh",
    }}>
        <Stack 
          sx={{
          
              }}> 
            <Card sx={{ 
              maxWidth: "80vw", 
              height: 550, 
              marginTop: "30vh",
              display: 'flex',
              bgcolor: '#D9D9D9',
              }}>
                <CardMedia
                    component="img" 
                    minHeight="550"
                    minWidth="auto"
                    image={imgFleur}
                    backgroundSize="cover"
                  />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Hypnose
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
🤤L'HYPNOSE ME FAIT PEUR🤤

Une phrase que jai souvent entendu autour de moi.

❓❔Savez-vous que vous pratiquez l'hypnose sans le savoir ? Tous les jours ? Depuis toujours ⁉️

Chacun d'entre nous exprimente l'hypnose quotidiennement, toutes les 90 minutes⏲

Il s'agit de tous ces moments où vous "decrochez" ou bien "quand vous êtes dans la lune "🌛

👋"Hey! Tu es avec nous?"🖐
➡️Voici un état flagrant d'un état hypnotique que vous avez sûrement déjà tous vecu!

Votre esprit s'évade pour un petit instant ☁️

✔Quand vous êtes dans un véhicule,🚄 et que le trajet vous a paru durer 5 minutes, plutôt que 40 minutes habituellement. 

✔Quand vous n'écoutez plus votre interlocuteur pendant quelques secondes🔇, le regard perdu dans le vague et vous lui demandez de répéter car vous avez perdu le fil. 

✔Lorsque vous lisez un livre📖 et que vous n'avez absolument rien retenu

✔Lorsque vous êtes concentré sur une tâche🤓 et que vous ne voyez pas le temps passer 

🌛⭐😴Tous les soirs, juste avant de vous endormir, vous êtes également en état d'hypnose💤🛌

Dans tous ces moments-là vous êtes en état d'hypnose. ➡️Vous êtes ici et ailleurs en même temps.

C'est bien pour cela que l'hypnose est un état naturel et accessible à tous, car nous l'expérimentons tous les jours sans même le savoir💡

Alors? L'hypnose te fait toujours peur maintenant?
        </Typography>
      </CardContent>
    </Card>

      </Stack>
    </Box>
  )
}

export default Hypnose