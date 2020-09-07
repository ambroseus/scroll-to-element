import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Paper,
  Grid,
} from "@material-ui/core";

export function ScrollModal(props) {
  const { open, onClose, onOk, elements = [] } = props;
  const refs = elements.map(() => React.createRef());

  const scrollTo = (index) => {
    refs[index].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="md">
      <DialogTitle>Scroll to element</DialogTitle>
      <DialogContent style={{ minHeight: "250px" }}>
        {elements.map((el, index) => {
          return (
            <Button
              key={`button${index}`}
              variant="contained"
              color="default"
              style={{ margin: 4 }}
              onClick={() => scrollTo(index)}
            >
              {index + 1}
            </Button>
          );
        })}
      </DialogContent>
      <DialogContent style={{ overflowY: "scroll", background: "#f8f8f8" }}>
        <Grid container spacing={2}>
          {elements.map((el, index) => {
            return (
              <Grid ref={refs[index]} key={`element${index}`} item xs={12}>
                <Paper style={{ width: "100%", padding: 8 }}>
                  <span>{index + 1}:</span>
                  {el}
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <div style={{ height: "500px" }}> </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained" color="default">
          Cancel
        </Button>
        <Button onClick={onOk} variant="contained" color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
