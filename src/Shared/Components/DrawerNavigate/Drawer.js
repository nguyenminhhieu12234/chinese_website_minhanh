import React, { useEffect, useState } from "react";
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import './Drawer.css';
import avatar1 from '../../Images/Avatar_user/avatar_user_1.jpg';
import { Divider, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography, makeStyles } from "@mui/material";
import { useNavigate } from "react-router-dom";
import List from '@mui/material/List';

import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';

function DrawerAdmin(){
    const [anchorEl, setAnchorEl] = useState();
    const [openInfo, setOpenInfo] = useState(false);
    const navigate = useNavigate();
    const [selectMenuIndex, setSelectMenuIndex] = useState(0);

    const selectedStyles = makeStyles({
        root:{
            "&.Mui-selected":{
                color: "darkgreen"
            }
        }
    });

    const avatarHandle = (e) => {
        if(openInfo){
            setOpenInfo(false);
        }else{
            setAnchorEl(e.currentTarget);
            setOpenInfo(true);
        }
    }

    const logoutHandle = () => {
        localStorage.removeItem('tokenLogin');

        navigate('/login');
    }

    const selectMenuHandle = (event, itemIndex) => {
        setSelectMenuIndex(itemIndex);
    }

    return(
        <Drawer id="drawer-admin" open={true}>
            <div className="info-user">
                <Grid align='center'>
                    <IconButton onClick={avatarHandle}>
                        <Avatar id="avatar-user" src={avatar1}></Avatar>
                        <Menu anchorEl={anchorEl} open={openInfo}>
                            <MenuItem onClick={logoutHandle}>Logout</MenuItem>
                        </Menu>
                    </IconButton>
                    <Typography sx={{fontSize: 10}}>Teacher</Typography>
                    <Typography sx={{fontSize: 10, fontWeight: 'bold'}}>Nguyen Minh Hieu</Typography>
                </Grid>
            </div>
            <Divider />
            <List sx={{padding: 1}}>
                <ListItem disablePadding selected={selectMenuIndex == 0}>
                    <ListItemButton className="btn-list-drawer" onClick={(event) => selectMenuHandle(event, 0)}>
                        <HomeIcon sx={{marginRight: '10px', fontSize: "15px"}}/>
                        <ListItemText>
                            <Typography className="font-item-drawer">Home</Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding selected={selectMenuIndex == 1}>
                    <ListItemButton className="btn-list-drawer" onClick={(event) => selectMenuHandle(event, 1)}>
                        <MenuBookIcon sx={{marginRight: '10px', fontSize: "15px"}}/>
                        <ListItemText>
                            <Typography className="font-item-drawer">Course</Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding selected={selectMenuIndex == 2}>
                    <ListItemButton className="btn-list-drawer" onClick={(event) => selectMenuHandle(event, 2)}>
                        <PersonIcon sx={{marginRight: '10px', fontSize: "15px"}}/>
                        <ListItemText>
                            <Typography className="font-item-drawer">Student</Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
}

export default DrawerAdmin;
