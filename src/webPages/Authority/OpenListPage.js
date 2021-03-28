import React, {useState} from 'react'
import ReportBar from "../../components/ReportBar/ReportBar"
import Complaint from "../../components/complaint/Complaint"
import {Card,CardContent,FormControlLabel, Checkbox,Grid, Button,ButtonGroup, Typography} from "@material-ui/core"
import {} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import SaveChanges from '../../components/SaveChangesModel/SaveChanges'
const useStyles = makeStyles((theme)=>({
  card:{
    height:'150px', display:'flex', flexDirection:'column', marginTop: '10px',
    backgroundColor: '#F5EBEB'
  },
    check:{
    // width:'200px',
    height:'40px',
    marginLeft: '90px',
    display:'flex'

  },
  btn:{
    width: '170px'
  }
 
}));
function OpenListPage() {
    const classes = useStyles();
    const [showModel, setShowModel] = useState(false)
    const openModel = () =>{
      setShowModel(prev => !prev);
    }
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
                      <CardContent className={classes.check} >
                           <Button disableRipple onClick={openModel} variant="contained" color="primary" className={classes.btm}>Mark in progress</Button>
                           <SaveChanges showModel={showModel} setShowModel={setShowModel}/>
                        </CardContent>
                </Card>
            </Grid>
           

        </div>
    )
}

export default OpenListPage
