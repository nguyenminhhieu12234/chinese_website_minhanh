import DrawerAdmin from "Shared/Components/DrawerNavigate/Drawer";
import React, { useEffect, useRef, useState } from "react";
import './EditCourseAdminView.css';
import { Box, Grid, MenuItem, Paper, Select, TextField, Typography, Button, Chip, Avatar, Menu, OutlinedInput } from "@mui/material";
import { listShift } from "Shared/CommonData/CommonData";
import defaultImg from '../../Shared/Images/default_img.png';
import { ref } from "yup";
import { useNavigate } from "react-router-dom";
import mainApi from "Api/mainApi";
import { CommonModal } from "Shared/Modals/CommonModal";

function EditCourseAdminView(){
    const inputRef = useRef(null);
    const [imageCourse, setImageCourse] = useState('');
    const [listStudent, setListStudent] = useState([]);
    const [listShifts, setListShifts] = useState([]);
    const [selectShift, setSelectShift] = useState('');
    const [listIdUser, setListIdUser] = useState([]);
    const [listSelectedStudent, setListSelectedStudent] = useState([]);
    const [detailCourse, setDetailCourse]= useState({
        title: '',
        Detail: '',
        courseCost: '',
        shiftID: 0,
        BackgroundId: '',
        userCreate: JSON.parse(localStorage.getItem('userInfo')).userName
    });

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData(){
            setListStudent(await mainApi.getUsers());
            setListShifts(await mainApi.getShifts());
        }

        fetchData();
    }, []);

    const openImageHandle = () => {
        inputRef.current.click();
    }

    const changeImageHandle = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();

        reader.onloadend = () => {
            setImageCourse(reader.result);
        }

        reader.readAsDataURL(file);

    }

    const cancelSaveHandle = () => {
        navigate("/admin/course");
    }

    const saveHandle = () => {
        if(listSelectedStudent.length > 0){
            const newCourse = detailCourse;
    
            newCourse.shiftID = selectShift;
            newCourse.BackgroundId = imageCourse;

            var params = {listUserName: []};

            listSelectedStudent.map(username => {
                params.listUserName.push({userName: username});
            });

            mainApi.getIdUsers(params).then(data => {
                const listIdStudent = [];

                data.map(studentId => {
                    listIdStudent.push({studentId: studentId.id});
                });

                newCourse.Students = listIdStudent;

                mainApi.createCourse(newCourse);

                CommonModal('SUCCESS', 'Create course success!!!', 'success', true, false, navigate);
            });
        }else{
            CommonModal("WARNING", "Please choose student for course!!!", "warning", true, false, navigate);
        }
    }

    const selectStudentHandle = (e) => {
        setListSelectedStudent(e.target.value);
    }

    const selectShiftHandle = (e) => {
        setSelectShift(e.target.value);
    }

    const handleInfoCourseChange = (event) => {
        const {name, value} = event.target;

        setDetailCourse({...detailCourse, [name]: value});
    }

    return(
        <div className="edit-course-view">
           <DrawerAdmin></DrawerAdmin>
           <div className="edit-course-area">
                <Paper className="area-content">
                    <Typography sx={{fontFamily: 'inherit', fontWeight: 'bold'}}>Select image</Typography>
                    <div className="course-background">
                        {
                            imageCourse ? <img src={imageCourse}/> : <img src={defaultImg}/>
                        }
                    </div>
                    <input type="file" ref={inputRef} style={{display: 'none'}} onChange={changeImageHandle}></input>
                    <Button id="btnSelectImg" size="small" variant="contained" onClick={openImageHandle}>Select Image</Button>
                </Paper>
                <Paper className="area-content">
                    <Typography sx={{fontFamily: 'inherit', fontWeight: 'bold', fontSize: 20}}>Infomation Course</Typography>
                    <Box className="box-input-content">
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box className="group-input-course">
                                    <Typography sx={{fontFamily: 'inherit', fontSize: 15}}>Course name:</Typography>
                                    <TextField id="txtCourseName" name="title" className="input-data-course" size="small" onChange={handleInfoCourseChange}></TextField>
                                </Box>
                                <Box className="group-input-course">
                                    <Typography sx={{fontFamily: 'inherit', fontSize: 15}}>Detail course:</Typography>
                                    <TextField id="txtCourseName" name="Detail" className="input-data-course input-detail-course" size="small" multiline maxRows={5} onChange={handleInfoCourseChange}></TextField>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box className="group-input-course">
                                    <Typography sx={{fontFamily: 'inherit', fontSize: 15}}>Shift course:</Typography>
                                    <Select value={selectShift} onChange={selectShiftHandle} className="input-data-course" size="small">
                                        {
                                            listShifts.map((shift) => (
                                                <MenuItem key={shift.id} value={shift.id}>{shift.shifT_NAME}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </Box>
                                <Box className="group-input-course">
                                    <Typography sx={{fontFamily: 'inherit', fontSize: 15}}>Cost:</Typography>
                                    <TextField id="txtCourseCost" name="courseCost" className="input-data-course" size="small" onChange={handleInfoCourseChange}></TextField>
                                </Box>
                                <Box className="group-input-course">
                                    <Select className="input-data-course" multiple 
                                        value={listSelectedStudent}
                                        onChange={selectStudentHandle}
                                        input={<OutlinedInput id="selected-multiple-chip"/>}
                                        renderValue={(selected) => (
                                            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}>
                                                {
                                                    selected.map(student => (
                                                        <Chip key={student} label={student}
                                                            avatar={<Avatar></Avatar>}></Chip>
                                                    ))
                                                }
                                            </Box>
                                        )}>
                                            {
                                                listStudent.map(student => (
                                                    <MenuItem key={student.id} value={student.userName}>{student.fullName}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                </Box>
                            </Grid>
                        </Grid>
                        <Button id="btnSave" size="small" variant="contained" onClick={saveHandle}>Save</Button>
                        <Button id="btnCancel" size="small" variant="contained" onClick={cancelSaveHandle}>Cancel</Button>
                    </Box>
                </Paper>
           </div>
        </div>
    );
}

export default EditCourseAdminView;