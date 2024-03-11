import DrawerAdmin from "Shared/Components/DrawerNavigate/Drawer";
import React from "react";
import './EditCourseAdminView.css';
import { Box, Grid, MenuItem, Paper, Select, TextField, Typography, Button } from "@mui/material";
import { listShift } from "Shared/CommonData/CommonData";
import defaultImg from '../../Shared/Images/default_img.png';

function EditCourseAdminView(){
    return(
        <div className="edit-course-view">
           <DrawerAdmin></DrawerAdmin>
           <div className="edit-course-area">
                <Paper className="area-content">
                    <Typography sx={{fontFamily: 'inherit', fontWeight: 'bold'}}>Select image</Typography>
                    <div className="course-background">
                        <img src={defaultImg}/>
                    </div>
                    <Button id="btnSelectImg" size="small" variant="contained">Select Image</Button>
                </Paper>
                <Paper className="area-content">
                    <Typography sx={{fontFamily: 'inherit', fontWeight: 'bold', fontSize: 20}}>Infomation Course</Typography>
                    <Box className="box-input-content">
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box className="group-input-course">
                                    <Typography sx={{fontFamily: 'inherit', fontSize: 15}}>Course name:</Typography>
                                    <TextField id="txtCourseName" className="input-data-course" size="small"></TextField>
                                </Box>
                                <Box className="group-input-course">
                                    <Typography sx={{fontFamily: 'inherit', fontSize: 15}}>Detail course:</Typography>
                                    <TextField id="txtCourseName" className="input-data-course" size="small"></TextField>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box className="group-input-course">
                                    <Typography sx={{fontFamily: 'inherit', fontSize: 15}}>Shift course:</Typography>
                                    <Select className="input-data-course" size="small">
                                        {
                                            listShift.map((shift) => (
                                                <MenuItem value={shift.id}>{shift.name}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
           </div>
        </div>
    );
}

export default EditCourseAdminView;