import { SaveOutlined } from '@mui/icons-material';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ImageGalery } from '../components';


export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1 }}>
        <Grid>
            <Typography fontSize={39} fontWeight='light' >08 de septiembre, 2024</Typography>
        </Grid>
        <Grid>
            {/* <IconButton color="secondary" aria-label="add an alarm">
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            </IconButton> */}
            <Button variant="contained" color='success' sx={{ padding: 2 }} >
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid >
        <Grid container size={12}>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder='Ingrese un titulo'
                label='titulo'
                sx={{ border: 'none', mb: 1 }}
            
            />
             <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='¿Que sucedió hoy?'
                sx={{ border: 'none', mb: 1 }}
                minRows={5}
            
            />
            <ImageGalery/>
        </Grid>
    </Grid>
  )
}
