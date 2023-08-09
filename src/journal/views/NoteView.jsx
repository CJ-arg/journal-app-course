import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector(state => state.journal)
  const { body, title, onInputChange, formState, date } = useForm(note)
  const dateString = useMemo(() => {
    const newDate = new Date(date)
    return newDate.toUTCString()
  }, [date])
  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState])
  return (
    <Grid
      className='animate__animated animate__fadeIn animate__faster'

      container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
      <Grid>
        <Typography fontSize={39} fontWeight='light'> {dateString}</Typography>
      </Grid>
      <Grid item>
        <Button color='primary' sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} /> Save
        </Button>
        <Grid container>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Enter a Title"
            label="Title"
            sx={{ border: 'none', mb: 1 }}
            name='title'
            value={title}
            onChange={onInputChange}
          />
          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="What happend today?"
            minRows={5}
            name='body'
            value={body}
            onChange={onInputChange}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
