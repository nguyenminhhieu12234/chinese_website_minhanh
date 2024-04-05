import React, { useContext, useEffect } from "react";
import './CourseAdminView.css';
import HomeAdminView from "Views/HomeAdminView/HomeAdminView";
import { Routes, Route } from "react-router-dom";
import DrawerAdmin from "Shared/Components/DrawerNavigate/Drawer";
import MainContext from "Context/MainContext";
import { Autocomplete, Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from "@mui/material";
import { Label } from "@mui/icons-material";
import FilterAdmin from "Shared/Components/Filter/FilterAdmin";
import CourseItem from "Shared/Components/CourseItem/CourseItem";
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import mainApi from "Api/mainApi";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import { CommonModal } from "Shared/Modals/CommonModal";

function CourseAdminView(){
    const mainContext = useContext(MainContext);
    const [messageRunDaily, setMessageRunDaily] = useState("");
    const [listCourses, setListCourses] = useState([]);

    useEffect(() => {
        async function fetchData(){
            setListCourses(await mainApi.getCourses());
        }

        fetchData();
    }, []);

    useEffect(() => {
        if(messageRunDaily === 'success'){
            CommonModal("success", "Run course success", 'success', false, true);
        }else if(messageRunDaily === 'exists'){
            CommonModal("ERROR", "Course was run in this day please check daily", 'error', false, true);
        }else if(messageRunDaily === ''){
            return;
        }else if(messageRunDaily === null){
            CommonModal("ERROR", "Course was run in this day please check daily", 'error', false, true);
        }else{
            CommonModal("ERROR", "Run course failed!!!", 'error', false, true);
        }

        setMessageRunDaily('');
    }, [messageRunDaily]);

    const RunDailyHandle = (courseId) => {
        const params = {
            courseId: courseId
        };

        console.log(params);

        async function fetchData(){
            setMessageRunDaily(await mainApi.runDaily(params));
        }

        fetchData();

        /*if(messageRunDaily === undefined){
            message = 'success';
        }else{
            message = messageRunDaily.data._message;
        }

        if(message === 'exists'){
            CommonModal("ERROR", "Course was run in this day please check daily", 'error', false, true);
        }else if(message === 'failed'){
            CommonModal("ERROR", "Run course failed!!!", 'error', false, true);
        }else{
            CommonModal("success", "Run course success", 'success', false, true);
        }*/
    }

    return(
        <div className="course-page">
            <DrawerAdmin></DrawerAdmin>
            <div className="course-content">
                <FilterAdmin></FilterAdmin>
                <div className="course-list">
                    <Grid container spacing={2}>
                        {
                            listCourses.map(course => (
                                <Grid item xs={3} key={course.id}>
                                    <Card sx={{height: '100%'}}>
                                        <CardMedia sx={{height: 200}} image={course.imG_URL}></CardMedia>
                                        <CardContent>
                                            <Typography sx={{
                                                fontFamily: 'inherit',
                                                fontWeight: 'bold',
                                                fontSize: '20px'
                                            }}>{course.title}</Typography>
                                            <Typography>{course.detail}</Typography>
                                            <div className="count-student">
                                                <PersonIcon></PersonIcon>
                                                <Typography>{course.countStudent}</Typography>
                                            </div>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" sx={{fontWeight: 'bold'}} onClick={() => RunDailyHandle(course.id)}>
                                                Run
                                            </Button>
                                            <Button size="small">
                                                Delete
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default CourseAdminView;