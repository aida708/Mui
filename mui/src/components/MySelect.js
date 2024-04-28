import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Select,
} from "@mui/material";

export default function MySelect() {
  const [age, setAge] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <Select value={age} label="Age" onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormLabel>Gender</FormLabel>
      <RadioGroup defaultValue="female" name="gender" onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
        <FormControlLabel
          value="Prefer not to say"
          control={<Radio />}
          label="Prefer not to say"
        />
      </RadioGroup>
    </Box>
  );
}
