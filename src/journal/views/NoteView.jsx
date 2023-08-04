import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'

export const NoteView = () => {
  return (
    <Grid
      className='animate__animated animate__fadeIn animate__faster'

      container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
      <Grid>
        <Typography fontSize={39} fontWeight='light'> 28 de diciembre, 2023</Typography>
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
          />
          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="What happend today?"
            minRows={5}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
