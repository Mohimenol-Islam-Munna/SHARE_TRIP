import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const LeftSideBar = () => {
  const [value, setValue] = useState([11, 21]);

  const priceRangeChangeHandler = (event, newValue) => {
    console.log("priceRangeChangeHandler ::", newValue);
    setValue(newValue);
  };

  return (
    <>
      <Box>
        {/* srot & filter  */}
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ p: "10px" }}
        >
          <Box>Sort &amp; filter </Box>
          <Box>reset </Box>
        </Stack>
        <Divider />

        {/* price range  */}
        <Box>
          <Typography>Price Range</Typography>
          <Divider />

          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ p: "10px" }}
          >
            <Box>
              <Typography>Minimum</Typography>
              <Typography>500</Typography>
            </Box>
            <Box>
              <Typography>Maximum</Typography>
              <Typography>2500</Typography>
            </Box>
          </Stack>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            min={10}
            max={25}
            onChange={priceRangeChangeHandler}
            valueLabelDisplay="auto"
          />
        </Box>

        <Divider />

        {/* class  */}
        <Box>
          <Typography>Class</Typography>
          <Divider />
          <FormGroup>
            <FormControlLabel
              sx={{ p: "0px", m: "0px" }}
              control={<Checkbox defaultChecked />}
              label="Ac(40)"
            />
            <FormControlLabel
              sx={{ p: "0px", m: "0px" }}
              control={<Checkbox />}
              label="Non Ac(20)"
            />
          </FormGroup>
        </Box>
        <Divider />

        {/* schedule  */}
        <Box sx={{ border: "1px solid salmon", boxSizing: "border-box" }}>
          <Typography>Schedule</Typography>
          <Divider />
          <Typography>Departure Time</Typography>
          <Box>
            <FormGroup>
              <FormControlLabel
                sx={{ border: "1px solid gray", p: "0px", m: "0px" }}
                control={<Checkbox />}
                label="00:00-05:45"
              />
              <FormControlLabel
                sx={{ border: "1px solid gray", p: "0px", m: "0px" }}
                control={<Checkbox />}
                label="00:00-05:45"
              />
              <FormControlLabel
                sx={{ border: "1px solid gray", p: "0px", m: "0px" }}
                control={<Checkbox />}
                label="00:00-05:45"
              />
              <FormControlLabel
                sx={{ border: "1px solid gray", p: "0px", m: "0px" }}
                control={<Checkbox />}
                label="00:00-05:45"
              />
            </FormGroup>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LeftSideBar;
