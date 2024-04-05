import React, { useEffect, useState } from 'react';
import './CheckDailyView.css';
import { Avatar, Box, Button, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import mainApi from 'Api/mainApi';

function CheckDailyView(){
    const [listDaily, setListDaily] = useState([]);
    const [reloadDaily, setReloadDaily] = useState(false);

    useEffect(() => {
        async function fetchData(){
            const currentUser = JSON.parse(localStorage.getItem("userInfo"));

            const params = {
                userId: currentUser.userName
            };

            setListDaily(await mainApi.getDailyStudent(params));
        }

        fetchData();
    }, [reloadDaily]);

    const checkDailyHandle = (id) => {
        async function fetchData(){
            const params = {
                dailyId: id
            };

            const response = await mainApi.updateDaily(params);

            if(response === "success"){
                if(reloadDaily === true){
                    setReloadDaily(false);
                }else{
                    setReloadDaily(true);
                }
            }
        }

        fetchData();
    }

    return(
        <div className='daily-view-page'>
            <Paper className='area-show-daily'>
                <TableContainer>
                    <Table sx={{minWidth: '100%'}} area-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Full Name</TableCell>
                                <TableCell align="center">Check</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                listDaily.map(daily => (
                                    <TableRow>
                                        <TableCell>{daily.teachDate}</TableCell>
                                        <TableCell>{daily.fullName}</TableCell>
                                        <TableCell align='center'>{daily.check === false ? "Fasle" : "True"}</TableCell>
                                        <TableCell align='center'>
                                            <Button variant='contained' size="small" sx={{display: daily.check === false ? "block" : "none"}} onClick={() => checkDailyHandle(daily.id)}>Check</Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}

export default CheckDailyView;