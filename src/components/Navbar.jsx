import { AppBar, Box, Toolbar, IconButton,  Typography, Button  } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
       <Box style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component={Link} to="/home" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
                    Job Portal
                </Typography>
                <Button
                           
                           sx={{ my: 2, color: 'black', display: 'block' }}>
                           <Link to="/Home" style={{ color: 'white', textDecoration: "none" }}>
                               Home
                           </Link>
                       </Button>
                <Button
                           
                           sx={{ my: 2, color: 'black', display: 'block' }}>
                           <Link to="/jobs" style={{ color: 'white', textDecoration: "none" }}>
                               Jobs
                           </Link>
                       </Button>
                <Button
                           
                           sx={{ my: 2, color: 'black', display: 'block' }}>
                           <Link to="/" style={{ color: 'white', textDecoration: "none" }}>
                               Login
                           </Link>
                       </Button>
       
        <Button
                           
                            sx={{ my: 2, color: 'black', display: 'block' }}>
                            <Link to="/sign" style={{ color: 'white', textDecoration: "none" }}>
                                sign up
                            </Link>
                        </Button>
                     
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
