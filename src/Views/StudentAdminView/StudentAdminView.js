import React, { useContext, useEffect } from "react";
import './StudentAdminView.css';
import DrawerAdmin from "Shared/Components/DrawerNavigate/Drawer";
import { Avatar, Button, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Modal, Paper, Toolbar, Typography, Box, TextField, Grid } from "@mui/material";
import mainApi from "Api/mainApi";
import { useState } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MainContext from "Context/MainContext";

function StudentAdminView(){
    const [listUSers, setListUsers] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [checkError, setCheckError] = useState(true);
    const [infoNewUser, setInfoNewUser] = useState({
        fullName: '',
        address: '',
        phoneNumber: 0,
        avatarPath: '',
        email: '',
        userName: '',
        password: '',
        typeAccount: ''
    });

    useEffect(() => {
        async function fetchData(){
            setListUsers(await mainApi.getUsers());
        }

        fetchData();
    }, []);

    const addNewUserHandle = () => {
        setOpenModal(true);
    }

    const cancelModalHandle = () => {
        setOpenModal(false);
    }

    const handleInfoChange = (event) => {
        const {name, value} = event.target;

        setInfoNewUser({...infoNewUser, [name]: value});
    }

    const handleCreateUser = async () => {
        setInfoNewUser({...infoNewUser, typeAccount: "Student"});

        const params = infoNewUser;

        if(params.typeAccount === ""){
            params.typeAccount = "Student";
        }

        for(const key in params){
            if(params[key] === ""){
                setCheckError(false);
            }
        }

        if(checkError === true){
            console.log(params);
            //mainApi.createUser(params);
        }
    }

    return(
        <div className="student-page">
            <DrawerAdmin></DrawerAdmin>
            <div className="student-content">
                <Paper className="filter-content">
                    <Toolbar>
                        <Button id="btnAddNewUser" onClick={addNewUserHandle} className="btn" size="small">+ Add New User</Button>
                    </Toolbar>
                </Paper>

                <Paper className="area-list-users">
                    <List>
                        {listUSers.map(user => (
                            <ListItem key={user.userName}>
                                <ListItemAvatar>
                                    <Avatar></Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography>{user.fullName}</Typography>
                                    <Typography>{user.userName}</Typography>
                                </ListItemText>
                                <ListItemText>
                                    <Typography>{user.email}</Typography>
                                    <Typography>{user.phoneNumber}</Typography>
                                </ListItemText>
                                <ListItemText>
                                    <Typography>{user.address}</Typography>
                                </ListItemText>
                                <ListItemText>
                                    <Typography>Admin</Typography>
                                </ListItemText>
                                <IconButton>
                                    <CalendarMonthIcon></CalendarMonthIcon>
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                </Paper>

                <Modal open={openModal}>
                    <Box className="modal-new-user">
                        <Typography sx={{
                            fontFamily: 'inherit',
                            fontWeight: 'bold',
                            fontSize: 15}}>New User</Typography>

                        <TextField className="txtInfoNewUser" name="fullName" placeholder="Full Name" onChange={handleInfoChange}></TextField>
                        <TextField className="txtInfoNewUser" name="address" placeholder="Address" onChange={handleInfoChange}></TextField>
                        <TextField className="txtInfoNewUser" name="phoneNumber" placeholder="Phone Number" onChange={handleInfoChange}></TextField>
                        <TextField className="txtInfoNewUser" name="email" placeholder="Email" onChange={handleInfoChange}></TextField>
                        <TextField className="txtInfoNewUser" name="userName" placeholder="User Name" onChange={handleInfoChange}></TextField>
                        <TextField className="txtInfoNewUser" name="password" placeholder="Password" onChange={handleInfoChange}></TextField>
                        <TextField className="txtInfoNewUser" id="txtTypeAccount" name="typeUser" placeholder="Type User" value={"Student"} disabled></TextField>

                        <Grid container sx={{width: '100% !important', marginTop: '10px'}}>
                            <Grid xs={6}>
                                <Button id="btnCreateUser" className="btnModal" variant="contained" size="small" onClick={handleCreateUser}>Create</Button>
                            </Grid>
                            <Grid xs={6}>
                                <Button id="btnCancelModal" className="btnModal" variant="contained" size="small" onClick={cancelModalHandle}>Cancel</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}

export default StudentAdminView;