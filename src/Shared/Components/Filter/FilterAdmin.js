import React from "react";
import './FilterAdmin.css';
import { Box, Button, Menu, MenuItem, Paper, TextField, Toolbar, Typography } from "@mui/material";
import { listShift } from "Shared/CommonData/CommonData";

import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function FilterAdmin(){
    const navigate = useNavigate();

    const addCourseHandle = () => {
        navigate('/admin/course/edit');
    }

    return(
        <div className="filter-search">
            <Paper className="filter-content">
                <Toolbar className="filter-toolbar">
                    <Typography sx={{
                        fontFamily: 'inherit',
                        fontWeight: 'bold',
                        flexGrow: 1
                    }}>Course list</Typography>
                    <Box>
                        <TextField id="txtSearch" className="filter-item-bar" size="small" placeholder="Search..."></TextField>
                        <Button id="btnFilter" className="filter-item-bar filter-button-bar" variant="outlined">Filter</Button>
                        <Button id="btnAddCourse" onClick={addCourseHandle} className="filter-item-bar filter-button-bar" variant="outlined">+ Add Course</Button>
                    </Box>
                </Toolbar>
            </Paper>
        </div>
    );
}

export default FilterAdmin;