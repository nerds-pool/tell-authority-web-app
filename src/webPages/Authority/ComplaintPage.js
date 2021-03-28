import React from 'react'
import ReportBar from "../../components/ReportBar/ReportBar"
import Complaint from "../../components/complaint/Complaint"
import {} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
const useStyles = makeStyles((theme)=>({
  
}));
function ComplaintPage() {
    const classes = useStyles();

    return (
        <div>
            <ReportBar/>
            <Complaint/>
        </div>
    )
}

export default ComplaintPage
