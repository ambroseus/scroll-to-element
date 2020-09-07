import React, { useState } from "react";
import { CssBaseline, Button } from "@material-ui/core";
import { ScrollModal } from "./ScrollModal";
import { elements } from "./elements";

export function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CssBaseline />

      <Button
        variant="contained"
        color="primary"
        style={{ margin: 16 }}
        onClick={() => setOpen(true)}
      >
        open scroll modal
      </Button>
      <ScrollModal
        elements={elements}
        open={open}
        onClose={() => setOpen(false)}
        onOk={() => setOpen(false)}
      />
    </>
  );
}
