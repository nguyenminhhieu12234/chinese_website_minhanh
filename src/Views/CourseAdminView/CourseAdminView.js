import React, { useContext } from "react";
import './CourseAdminView.css';
import HomeAdminView from "Views/HomeAdminView/HomeAdminView";
import { Routes, Route } from "react-router-dom";
import DrawerAdmin from "Shared/Components/DrawerNavigate/Drawer";
import MainContext from "Context/MainContext";
import { Autocomplete, Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from "@mui/material";
import { Label } from "@mui/icons-material";
import FilterAdmin from "Shared/Components/Filter/FilterAdmin";
import CourseItem from "Shared/Components/CourseItem/CourseItem";
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';

function CourseAdminView(){
    const listCourse = [
        {
            id: "C1",
            name: "Course 1",
            content: "Course 1 just for new student and children",
            image: 'https://www.ketchum.edu/sites/default/files/2022-08/First%20%28Top%29%20Image%20.jpeg'
        },
        {
            id: "C2",
            name: "Course 2",
            content: "Course 2 just for normal student",
            image: 'https://images.squarespace-cdn.com/content/v1/56b1148fe707ebac7ac5d685/1659916527594-0QOSGRAEFR3ZKPAIRBKI/studying-ahead-1421056.jpg'
        },
        {
            id: "C3",
            name: "Course 3",
            content: "Course 3 just for high student",
            image: 'https://media.wired.com/photos/6340c6c2f93a1584dc57f353/master/pass/Tips-and-Apps-to-Help-Students-Gear-GettyImages-1132647177.jpg'
        },
        {
            id: "C4",
            name: "Course 4",
            content: "Course 4 just for end student",
            image: 'https://scientific-publishing.webshop.elsevier.com/wp-content/uploads/2022/08/what-background-study-how-to-write-1200x900.jpg'
        }
    ];
    const mainContext = useContext(MainContext);

    return(
        <div className="course-page">
            <DrawerAdmin></DrawerAdmin>
            <div className="course-content">
                <FilterAdmin></FilterAdmin>
                <div className="course-list">
                    <Grid container spacing={2}>
                        {
                            listCourse.map((course) => (
                                <Grid item xs={3} key={course.id}>
                                    <Card sx={{height: '100%'}}>
                                        <CardMedia sx={{height: 200}} image={course.image}></CardMedia>
                                        <CardContent>
                                            <Typography sx={{
                                                fontFamily: 'inherit',
                                                fontWeight: 'bold',
                                                fontSize: '20px'
                                            }}>{course.name}</Typography>
                                            <Typography>{course.content}</Typography>
                                            <div className="count-student">
                                                <PersonIcon></PersonIcon>
                                                <Typography>200</Typography>
                                            </div>
                                            <Button id={"btnDetail" + course.id} className="btnDetailCourse" variant="contained" size="small">Detail</Button>
                                        </CardContent>
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