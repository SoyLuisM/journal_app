import { TurnedIn } from "@mui/icons-material"
import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';

export const SideBar = ({ drawerWidth = 240}) => {
  return (
    <Box 
        component='nav'
        sx={{ width: {sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant="permanent"
            open
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }

             }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div' >
                    Luis Martinez
                </Typography>
            </Toolbar>
            <Divider/>
            
            <List>
            {
                    ['enero', 'febrero', 'marzo','abril'].map(text =>(
                        <ListItemButton key={text}>
                            <ListItemIcon >
                                <TurnedIn/>
                            </ListItemIcon>
                            <Grid>
                                <ListItemText primary={ text }/>
                                <ListItemText primary={ 'Lorem ipsum dolor . Placeat, possimus.' }/>
                            </Grid>
                        </ListItemButton>
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}
