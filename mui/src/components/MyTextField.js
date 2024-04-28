import {
  Button,
  Checkbox,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import React from "react";
import { useState } from "react";

export default function MyTextField() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscripe: false,
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          type={"text"}
          sx={{ margin: 4 }}
          placeholder="Name"
          variant="outlined"
        />
        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
          type={"email"}
          sx={{ margin: 4 }}
          placeholder="Email"
          variant="filled"
        />
        <TextField
          name="password"
          value={inputs.password}
          onChange={handleChange}
          type={"password"}
          sx={{ margin: 4 }}
          placeholder="Password"
          variant="filled"
        />
        <Button type="submit">Submit</Button>
        <Typography>{inputs.name}</Typography>

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prev) => ({
                    ...prev,
                    subscripe: !inputs.subscripe,
                  }))
                }
              />
            }
            label="Subscribe To Newsletter"
          />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
