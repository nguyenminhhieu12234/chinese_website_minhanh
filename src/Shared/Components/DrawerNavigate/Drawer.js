import React, { useEffect, useState } from "react";
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import './Drawer.css';
import avatar1 from '../../Images/Avatar_user/avatar_user_1.jpg';
import { Divider, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { Link, useNavigate, Router } from "react-router-dom";
import List from '@mui/material/List';
import {list_menu_drawer} from '../../CommonData/CommonData';

import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 150;

function DrawerAdmin(){
    const [anchorEl, setAnchorEl] = useState();
    const [openInfo, setOpenInfo] = useState(false);
    const navigate = useNavigate();
    const [selectMenuIndex, setSelectMenuIndex] = useState(0);

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

        navigate('/admin/course');
    }

    return(
        <Drawer id="drawer-admin" open={true} variant="permanent" anchor="left" sx={{
            width: drawerWidth}}>
            <div className="info-user">
                <Grid align='center'>
                    <IconButton onClick={avatarHandle}>
                        <Avatar id="avatar-user" src={avatar1}></Avatar>
                        <Menu className="menu-info" anchorEl={anchorEl} open={openInfo}>
                            <MenuItem className="btn-menu-info" onClick={logoutHandle}>
                                <LogoutIcon className="icon-style"/>
                                <Typography className="font-item-style">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </IconButton>
                    <Typography sx={{fontSize: 10}}>Teacher</Typography>
                    <Typography sx={{fontSize: 10, fontWeight: 'bold'}}>Nguyen Minh Hieu</Typography>
                </Grid>
            </div>
            <Divider />
            <List sx={{padding: 1}}>
                {
                    list_menu_drawer.map((item) => (
                            <ListItem key={item.name + item.index} disablePadding selected={selectMenuIndex == item.index} className={selectMenuIndex == item.index ? 'btn-list-active' : ''}>
                                <ListItemButton className="btn-list-drawer" onClick={(event) => selectMenuHandle(event, item.index)}>
                                    {item.icon}
                                    <ListItemText>
                                        <Typography className="font-item-style">{item.name}</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                    ))
                }
            </List>
        </Drawer>
    );
}

export default DrawerAdmin;
