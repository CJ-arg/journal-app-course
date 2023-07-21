import { Box } from '@mui/material'
import React from 'react'
import { NavBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth={drawerWidth} />
      {/* sideBar  drawerWidth*/}

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        {/* toolbar  */}
        {children}
      </Box>
    </Box>
  )
}
