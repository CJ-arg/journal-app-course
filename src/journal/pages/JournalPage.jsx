import { FireTruck, Mail } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { ImageGallery, NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, deleniti repellat, deserunt repellendus quisquam sint nulla magni veniam autem ex expedita quae non quis. Sunt doloremque provident pariatur tempora rerum!</Typography> */}
      {/* <NothingSelectedView /> */}
      <ImageGallery />
      {/* <NoteView /> */}
    </JournalLayout>

  )
}
