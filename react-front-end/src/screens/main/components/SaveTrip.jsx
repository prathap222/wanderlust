import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import postToBackEnd from '../helpers/postToBackend';

const handleClickOpen = setOpen => {
  setOpen(true);
};
const handleClose = setOpen => {
  setOpen(false);
};

const SaveTrip = props => {

  let navigate = useNavigate();

// ------ INITILIZING THE STATE ------------------------------ //
  const [open, setOpen] = useState(false);
  const [tripName, setTripName] = useState(props.tripName || "");
  const [error, setError] = useState("");

  const modalStlye = {
    height: "14vh",
    width: "20vw",
    margin: "20px",
    marginBottom: "0px",
    color: "#872657"
  };

  const textFieldStyle = {
    margin: "0 20px",
  };

  return (
    <div className="save-trip">
      <Button
        style={{ background:"#E2F516"}}
        variant="contained"
        onClick={() => handleClickOpen(setOpen)}
      >
        Save Trip
      </Button>
      <Dialog
        open={open}
        onClose={() => handleClose(setOpen)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" style={modalStlye}>
          <h2>{props.city}</h2>
          <h4>Total: ${props.total}</h4>
          <p className="length-error">{error}</p>
        </DialogTitle>
        <DialogContent style={textFieldStyle}>
          <TextField
            autoFocus
            autoComplete="off"
            margin="dense"
            id="tripname"
            label="Enter Trip Name"
            type="text"
            fullWidth
            value={tripName}
            onChange={e => {
              if (e.target.value.length <= 15) {
                setTripName(e.target.value);

                return;
              } else {
                setError("Trip name is too long!");
              }
              return;
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            style={{ color:"#872657", fontSize:"18px"}}
            onClick={() => {
              if (!tripName) {
                alert("Trip name is required!");
                return;
              }
              postToBackEnd(
                tripName,
                props.tripId,
                props.user.id,
                props.columns,
                props.total,
                props.budget
              )
                .then(res => {
                  console.log(res)
                  handleClose(setOpen);
                  navigate(`/trips/${props.user.name}`);
                })
                .catch(err => {
                  console.log(err)
                  alert("Saving was unsuccessful");
                });
            }}
          >
            Save Trip
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default SaveTrip;
