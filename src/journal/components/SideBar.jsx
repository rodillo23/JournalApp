import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({drawerWidth}) => {
  return (
    <Box 
        component='nav'
        sx={{ width: {sm: drawerWidth}, flexShrink: {sm:0}}}
    >
        <Drawer
            variant="permanent" //temporary
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth
                }
            }}
        >
            <Toolbar>

                <Typography 
                    variant="h6" 
                    noWrap
                    component='div'
                    align="center"
                >
                    Rodolfo Figueroa
                </Typography>
            </Toolbar>

            <Divider/>

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'].map( text => (
                        <ListItem key={text} >
                            <ListItemButton>
                                
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>

                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary='Lorem Ipsum is simply dummy text'/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
