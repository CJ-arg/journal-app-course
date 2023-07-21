import { Box } from '@mui/material'
import React from 'react'

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* navBar */}
      {/* sideBar  */}

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        {/* toolbar  */}
        children
      </Box>
    </Box>
  )
}
