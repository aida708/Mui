import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { Stack } from "@mui/material";

export default function MyButtons() {
  return (
    <Stack direction="row" spacing={2} sx={{ margin: 10 }}>
      <Button
        color="success"
        size="large"
        variant="outlined"
        sx={{ margin: 10 }}
        onClick={() => {
          alert("clicked");
        }}>
        Hello Aida
      </Button>
      <Button color="error" size="small" variant="contained" sx={{ margin: 3 }}>
        second
      </Button>
      <Button color="info" size="medium" variant="text" sx={{ margin: 3 }}>
        Third
      </Button>

      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}
