import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'

function Navbar() {
    const [value, setValue] = useState(0)

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

  return (
        <Box sx={{ 
            width: '100%', 
            position: 'fixed',
            marginTop: '210px',
            display: "flex",
            justifyContent: 'flex-end',
            }}>
         
            <Tabs value={value} onChange={handleChange} >
                <Tab label="Accueil" href='#Accueil' />
                <Tab label="Hypnose" href='#Hypnose' />
                <Tab label="Qui suis-je" href='#Quisuisje'/>
                <Tab label="Boutique" href='#Boutique'/>
                <Tab label="FAQ" href='#Faq'/>
                <Tab label="Contact" href='#Contact'/>
            </Tabs>
        </Box>
    
  )
}

export default Navbar