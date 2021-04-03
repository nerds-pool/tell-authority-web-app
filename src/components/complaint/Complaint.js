import React, { useState, useEffect } from 'react'
//import  material UI components 
import { Card,
         CardContent, 
         Button, 
         Typography, 
          } from "@material-ui/core"

// import icons 
import { PriorityHigh, 
         HelpOutline, 
         ArrowDropUp } from "@material-ui/icons"
//import Alert
import Alert from "../alertBox/Alert"
// import makeStyles
import { makeStyles } from "@material-ui/core/styles"

//import image for testing
import bicyleImg from "./Bicycle.png"

// import custom COLOR library
import { COLOR } from "../../theme/Color"


function Complaint(props) {
    const [complaintType, setComplaintType] = useState(props.type);
    useEffect(() => setComplaintType(props.type), [props.type]);
    
    const [showLess, setShowLess] = useState(true)
    const desc = props.desc;
    
    // State -> Setter
    // setState -> Getter
    
    // State for open and closenDialog
    const [Open, setOpen] = useState(false);
    // Open Dialog
    const OpenHandle = () => {
        setOpen(true)
    }
    // Close Dialog
    const CloseHandle = () => {
        setOpen(false)
    }

    // State for open and closenDialog
    const [OpenReject, setOpenReject] = useState(false);
    // OpenReject Dialog
    const OpenRejectHandle = () => {
        setOpenReject(true)
    }
    // Close Dialog
    const CloseRejectHandle = () => {
        setOpenReject(false)
    }


    const renderButtons = () => {

        if (!complaintType || complaintType === "Open") return (
            <React.Fragment>
                {/* Accept Button */}
                <Button
                    disableRipple
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                    onClick={OpenHandle}
                >Accept</Button>
                <Alert open={Open} onClose={CloseHandle} Type={props.status} btnType={'Confirm'} title={props.title}/>
                
                {/* Reject Button */}
                <Button
                    disableRipple
                    variant="contained"
                    color="secondary"
                    className={classes.btn}
                    onClick={OpenRejectHandle}
                >Reject</Button>
                <Alert open={OpenReject} onClose={CloseRejectHandle} Type={props.status} btnType={'Reject'} title={props.title}/>

            </React.Fragment>
        )
        

        if (complaintType === "Accepted") return (
            <React.Fragment>
            <Button
                disableRipple
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={OpenHandle}
            >Mark in progress</Button>
            <Alert open={Open} onClose={CloseHandle} Type={props.status}  title={props.title}/>
            </React.Fragment>
            
        )

        if (complaintType === "Done") return (
            <React.Fragment>
            <Button
                disableRipple
                variant="contained"
                color="secondary"
                className={classes.btn}
                onClick={OpenHandle}
            >Ask to confirm</Button>
            <Alert open={Open} onClose={CloseHandle} Type={props.status}  title={props.title}/>
            </React.Fragment>
        )

        if (complaintType === "Closed") return null;
    }

    const classes = useStyles();
    return (
        <div>
            <Card className={classes.container} >
                <CardContent className={classes.content}>
                    <CardContent className={classes.userPref}>
                        <Button>User</Button>
                        <CardContent className={classes.upvotes}>
                            <ArrowDropUp fontSize="large" />
                            <Typography>11</Typography>
                        </CardContent>
                    </CardContent>

                    <CardContent className={classes.details}>
                        <Typography className={classes.heading}>{props.title} &nbsp; {props.date}</Typography>
                        <Typography className={classes.caption}>{showLess ? `${desc.slice(0, 70)}...` : desc}</Typography>
                        <Typography className={classes.desc} style={{}} onClick={() => setShowLess(!showLess)}>&nbsp;View {showLess ? "More" : "Less"}</Typography>
                        <Typography className={`${classes.caption} ${classes.dept}`}>Department: {props.dept}</Typography>
                    </CardContent>

                    <CardContent className={classes.medDet}>
                        <Typography>Status: {props.status}</Typography>
                        <img width="100" height="100" className={classes.media} src={bicyleImg} alt="" />

                    </CardContent>

                </CardContent>

                <CardContent className={classes.check} >
                    {renderButtons()}
                </CardContent>


            </Card>
        </div>
    )
}

export default Complaint


// styles
const useStyles = makeStyles((theme) => ({

    container: {
        marginTop: '20px',
        // width: '700px',
        height: '100%',
        padding: '0',
        backgroundColor: '#F5EBEB',
        maxWidth: '700px',
        minWidth: '490px'

    },
    content: {
        display: 'flex',
        height: '100%',
        margin: '0',
        padding: '0'
    },
    userPref: {
        display: 'flex',
        flexDirection: 'column',
        width: '10%',

    },
    upvotes: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.5px',
    },
    details: {
        width: '60%',
        // height:'100%'
    },
    heading: {
        fontWeight: 'bold'
    },
    caption: {
        fontSize: '15px',

    },
    desc: {
        cursor: 'pointer', color: 'blue'
    },
    dept: {
        color: 'red'
    },
    medDet: {
        width: '30%'
    },
    media: {
        // height: '100px',
        // width: '100px',
        // backgroundColor: 'blue'
    },
    check: {
        width: '200px',
        height: '40px',
        marginLeft: '90px',
        display: 'flex',
        padding: '0',
        marginBottom: '0',

    },
    btn: {
        margin: '2px',

    },



}));