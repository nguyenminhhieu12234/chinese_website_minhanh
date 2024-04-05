import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from "@mui/material";
import DrawerAdmin from "Shared/Components/DrawerNavigate/Drawer";
import React, { useState } from "react";
import './DailyView.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import mainApi from "Api/mainApi";
import { CommonModal } from "Shared/Modals/CommonModal";

function DailyView(){
    const [currentDate, setCurrentDate] = useState(new Date());
    const [searchUserId, setSearchUserId] = useState("");
    const [listDaily, setListDaily] = useState([]);


    const handleUserId = (event) => {
        setSearchUserId(event.target.value);
    }

    const handleSearch = () => {
        if(searchUserId === null || searchUserId === ""){
            CommonModal("WARNING", "Please input student id for search", 'warning', false, true);
        }else{
            async function fetchData(){
                const params = {
                    Date: currentDate.toLocaleDateString('en-US', {month: '2-digit', year: 'numeric'}),
                    userId: searchUserId
                }
    
                setListDaily(await mainApi.getDaily(params));
            }
    
            fetchData();
        }

    }

    return(
       <div className="daily-page">
            <DrawerAdmin></DrawerAdmin>
            <div className="daily-content">
                <div className="search-bar">
                    <Paper>
                        <Toolbar>
                            <Typography sx={{
                                fontFamily: 'inherit',
                                fontWeight: 'bold',
                                flexGrow: 1
                            }}>Daily</Typography>
                            <Box>
                                <TextField placeholder="Student Id" onChange={handleUserId}></TextField>
                                <Typography>Month:</Typography>
                                <DatePicker showMonthYearPicker dateFormat={"MM/YYYY"} selected={currentDate} onKeyDown={(event) => {
                                    event.preventDefault();
                                }} onChange={(date) => setCurrentDate(date)}></DatePicker>
                                <Button className="btnSearch" variant="contained" size="small" onClick={handleSearch}>Search</Button>
                            </Box>
                        </Toolbar>
                    </Paper>
                </div>
                <div className="table-daily">
                    <Paper className="area-show-daily">
                        <TableContainer>
                            <Table sx={{minWidth: '100%'}} area-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Full Name</TableCell>
                                        <TableCell align="center">Check</TableCell>
                                        <TableCell>Cost</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        listDaily.map(daily => (
                                            <TableRow>
                                                <TableCell>{daily.teachDate}</TableCell>
                                                <TableCell>{daily.fullName}</TableCell>
                                                <TableCell align="center">{daily.check === false ? "False" : "True"}</TableCell>
                                                <TableCell>{daily.cost}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
            </div>
       </div>
    );
}

export default DailyView;