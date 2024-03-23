import React, { useContext, useEffect } from "react";
import './StudentAdminView.css';
import DrawerAdmin from "Shared/Components/DrawerNavigate/Drawer";
import { Avatar, Button, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Modal, Paper, Toolbar, Typography, Box, TextField, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import mainApi from "Api/mainApi";
import { useState } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MainContext from "Context/MainContext";
import Swal from "sweetalert2";
import { CommonModal } from "Shared/Modals/CommonModal";

function StudentAdminView(){
    const [listUSers, setListUsers] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [checkError, setCheckError] = useState(true);
    const [reloadList, setReloadList] = useState(false);
    const [currentUserInfo, setCurrentUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")));
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
    }, [reloadList]);

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

        params.createUser = currentUserInfo.userName;

        for(const key in params){
            if(params[key] === ""){
                setCheckError(false);
            }
        }

        if(checkError === true){
            const respone = mainApi.createUser(params);

            if(respone != null){
                setOpenModal(false);
                CommonModal('SUCCESS', 'Create user success!!!', 'success', true, false);
                setReloadList(true);
            }
        }else{
            setOpenModal(false);
            CommonModal('ERROR', 'Create user failed!', 'error', false, true);
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
                    <TableContainer>
                        <Table sx={{minWidth: '100%'}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="lbl-cell-user" align="left">ID</TableCell>
                                    <TableCell className="lbl-cell-user" align="center">Avatar</TableCell>
                                    <TableCell className="lbl-cell-user" align="left">Full Name</TableCell>
                                    <TableCell className="lbl-cell-user" align="left">Address</TableCell>
                                    <TableCell className="lbl-cell-user">Email</TableCell>
                                    <TableCell className="lbl-cell-user" align="center">UserName</TableCell>
                                    <TableCell className="lbl-cell-user" align="center">Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    listUSers.map(user => (
                                        <TableRow key={user.userName}>
                                            <TableCell align="left">{user.id}</TableCell>
                                            <TableCell align="center">
                                                <Avatar></Avatar>
                                            </TableCell>
                                            <TableCell>{user.fullName}</TableCell>
                                            <TableCell>{user.address}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell align="center">{user.userName}</TableCell>
                                            <TableCell align="center">{!user.isDeleted ? "On" : "Lock"}</TableCell>
                                            <TableCell>
                                                <Button>lock</Button>
                                                <Button>open</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
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