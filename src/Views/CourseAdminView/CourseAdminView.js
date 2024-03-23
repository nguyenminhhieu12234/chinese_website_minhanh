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

function CourseAdminView(){
    const mainContext = useContext(MainContext);
    const [listCourses, setListCourses] = useState([]);

    useEffect(() => {
        async function fetchData(){
            setListCourses(await mainApi.getCourses());
        }

        fetchData();
    }, []);

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
                                            <Button size="small" sx={{fontWeight: 'bold'}}>
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