import { StarOutline } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      align='center'
      justifyContent='center'
      sx={{minHeight: 'calc(100vh-110px) ', backgroundColor: 'primary.main', padding: 4, borderRadius:3}}
    >
        <Grid size={12}  align="center">
            <StarOutline sx={{ fontSize:100, color:'white' }} />
        </Grid>
        <Grid size={12}  align="center">
            <Typography color='white' variant='h5'> Selecciona o crea una entrada</Typography>
        </Grid>
    </Grid>
  )
}
