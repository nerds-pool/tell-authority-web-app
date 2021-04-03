import {} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
const useStyles = makeStyles((theme)=>({
  
}));



<Complaint
          key={Math.random().toString()}
          title={OpenListData[0].title}
          desc={OpenListData[0].description}
          dept={OpenListData[0].department}
          date={OpenListData[0].date}
          status={OpenListData[0].status}
          onClose={handleClose}
          onOpen={handleClickOpen}
          open={open}
          type="Accepted"
        />



      // setTimeout(())

        var reason = prompt("Please write the reason to REJECT Complaint");
        while (reason === "") {
            reason = prompt("Please write the reason to REJECT Complaint");
        }
    }
    function Confirm(title) {
        var txt;
        var r = window.confirm("Confirm your request : " + title);

    }



    // Click Decline
        // if(AlertType === "Decline") return (
        //     // CLick Decline 
        //     <React.Fragment>
        //     <Dialog open={Open} onClose={CloseHandle} aria-labelledby="form-dialog-title">
        //             <HelpOutline/>
        //             <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        //             <DialogContent>
        //             <DialogContentText>
        //                {props.title}
        //             </DialogContentText>
        //             </DialogContent>
        //             <DialogActions>
        //             <Button onClick={CloseHandle} color="primary">
        //                 Confirm
        //             </Button>
        //             <Button onClick={CloseHandle} color="primary">
        //                 Cancel
        //             </Button>
        //             </DialogActions>
        //         </Dialog>
        // </React.Fragment>
        // )

        // if(AlertType === "Mark") return (
        //     // CLick Mark in Progress 
        //     <React.Fragment>
        //     <Dialog open={Open} onClose={CloseHandle} aria-labelledby="form-dialog-title">
        //             <HelpOutline/>
        //             <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        //             <DialogContent>
        //             <DialogContentText>
        //                {props.title}
        //             </DialogContentText>
        //             </DialogContent>
        //             <DialogActions>
        //             <Button onClick={CloseHandle} color="primary">
        //                 Confirm
        //             </Button>
        //             <Button onClick={CloseHandle} color="primary">
        //                 Cancel
        //             </Button>
        //             </DialogActions>
        //         </Dialog>
        // </React.Fragment>
        // )

        // if(AlertType === "RequestAdmin") return (
        //     // Click to request Admin to confirm done 
        //     <React.Fragment>
        //     <Dialog open={Open} onClose={CloseHandle} aria-labelledby="form-dialog-title">
        //             <HelpOutline/>
        //             <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        //             <DialogContent>
        //             <DialogContentText>
        //                {props.title}
        //             </DialogContentText>
        //             </DialogContent>
        //             <DialogActions>
        //             <Button onClick={CloseHandle} color="primary">
        //                 Confirm
        //             </Button>
        //             <Button onClick={CloseHandle} color="primary">
        //                 Cancel
        //             </Button>
        //             </DialogActions>
                // </Dialog>
        // </React.Fragment>
        // )