import React from 'react'
import ReportBar from "../../components/ReportBar/ReportBar"
import Complaint from "../../components/complaint/Complaint"
import {Card,CardContent,Grid, Button,ButtonGroup, Typography} from "@material-ui/core"
import {} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import SaveChanges from '../../components/SaveChangesModel/SaveChanges'
const useStyles = makeStyles((theme)=>({
  card:{
    height:'150px', display:'flex', flexDirection:'column', marginTop: '10px',
    backgroundColor: '#F5EBEB'
  },
    btn:{
    //   height: '2px'
    marginLeft: '90px',
    

  },
  btnst:{
      // height: '20px'
  }
}));
function HomePage() {
    const classes = useStyles();
    return (
        <div className="marginWIthinCOntent">
            <h1>im in home page</h1>
            <ReportBar/>
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Card className={classes.card} style={{}}>
                    <Complaint /> 
                      <CardContent>
                    <ButtonGroup disableRipple className={classes.btn} >
                            <Button variant="contained" color="primary"  className={classes.btnst}>Accept</Button>
                            <Button variant="contained" color="secondary" className={classes.btnst}>Decline</Button>
                        </ButtonGroup>
                        {/* <SaveChanges/> */}
                        </CardContent>
                </Card>
            </Grid>
            
        </div>
    )
}

export default HomePage
