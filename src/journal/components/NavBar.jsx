import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { useDispatch } from "react-redux";
import { startLogout } from "../../store";

export const NavBar = ({drawerWidth = 240}) => {
  const dispatch = useDispatch()
  const onLogout = ()=>{
    dispatch(startLogout())
  }
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        width: { sm: `calc(100% - ${drawerWidth}px)` }, 
        ml: { sm: `${drawerWidth}px` }
      }}
    >
      <Toolbar>
        <IconButton 
          color="inherit"
          edge="start"
          sx={{ mr:2, display: {sm: 'none'} }}

        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
          size={12}
        >
          <Typography variant="h6" noWrap component='div'>Journal</Typography>

          <IconButton color="error" onClick={onLogout}>
            <LogoutOutlined/>
          </IconButton>


        </Grid>
      </Toolbar>
    </AppBar>
  )
}

