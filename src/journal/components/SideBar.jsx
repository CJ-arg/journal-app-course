import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent' // temporary
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Carlos Janon
          </Typography>


        </Toolbar>
        <Divider />
        <List>



        </List>
      </Drawer>

    </Box>
  )
}
