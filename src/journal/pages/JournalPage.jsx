import { AddOutlined, FireTruck, Mail } from '@mui/icons-material'
import { Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { ImageGallery, NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, deleniti repellat, deserunt repellendus quisquam sint nulla magni veniam autem ex expedita quae non quis. Sunt doloremque provident pariatur tempora rerum!</Typography> */}
      {/* <NothingSelectedView /> */}
      {/* <ImageGallery /> */}
      <NoteView />
      <IconButton size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}>

        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>
    </JournalLayout>

  )
}
