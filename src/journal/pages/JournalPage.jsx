import { AddOutlined, FireTruck, Mail } from '@mui/icons-material'
import { Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { ImageGallery, NoteView, NothingSelectedView } from '../views'
import { startNewNote } from '../../store/journal'
import { useDispatch, useSelector } from 'react-redux'

export const JournalPage = () => {
  const { isSaving, active } = useSelector(state => state.journal)
  const dispatch = useDispatch()
  const onClickNewNote = () => {
    dispatch(startNewNote())
  }
  return (
    <JournalLayout>

      {(!!active) ? <NoteView /> : <NothingSelectedView />}


      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>

  )
}
