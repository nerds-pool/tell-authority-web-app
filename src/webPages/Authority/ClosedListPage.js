import React from 'react'
import ReportBar from "../../components/ReportBar/ReportBar"
import Complaint from "../../components/complaint/Complaint"
import {Card,CardContent,FormControlLabel, Checkbox,Grid, Button,ButtonGroup, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {COLOR} from "../../theme/Color"
const useStyles = makeStyles((theme)=>({
  card:{
    height:'150px', display:'flex', flexDirection:'column', marginTop: '10px',
    backgroundColor: '#F5EBEB'
  },
    check:{
    
    marginLeft: '90px',
    

  },
  btn:{
    backgroundColor: COLOR.redColour,
    color : 'white',
    '&:hover':{
        backgroundColor: COLOR.redColour
    }
  }
 
}));
function ClosedListPage() {
    const classes = useStyles();
    return (

        <div>
             <ReportBar/>
             <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Card className={classes.card} style={{}}>
                    <Complaint /> 
                </Card>
            </Grid>
        </div>
    )
}

export default ClosedListPage
