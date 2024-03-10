import React from "react";
import './FilterAdmin.css';
import { Button, Grid, MenuItem, Paper, TextField } from "@mui/material";
import { listShift } from "Shared/CommonData/CommonData";

function FilterAdmin(){
    console.log(listShift);

    return(
        <div className="filter-search">
            <Paper className="filter-content">
                <Grid container spacing={2}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}>
                        <TextField id="txtSelectShift" className="filter-select" defaultValue={"MORNING"} select size="small">
                            {
                                listShift.map((shift) => (
                                    <MenuItem key={shift.id} value={shift.id}>{shift.name}</MenuItem>
                                ))
                            }
                        </TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container spacing={1}>
                            <Grid item xs={8}>
                                <TextField id="txtSearch" label="Search..." size="small"></TextField>
                            </Grid>
                            <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center'}}>
                                <Button id="btnSearch" variant="contained" size="small">Search</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default FilterAdmin;