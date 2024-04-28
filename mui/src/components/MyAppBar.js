import { AppBar, Button, Typography, Tab, Tabs, Toolbar } from "@mui/material";
import React, { useState } from "react";

export default function MyAppBar() {
  const [value, setValue] = useState(0);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Tabs
            indicatorColor="secodary"
            textColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}>
            <Tab label="First" />
            <Tab label="Second" />
            <Tab label="Third" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
}
