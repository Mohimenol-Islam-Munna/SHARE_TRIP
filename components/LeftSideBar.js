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
      <Box
        sx={{
          border: "1px solid #F6F6F6",
          borderRadius: "6px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* srot & filter  */}
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ p: "10px 10px 25px", flexWrap: "wrap" }}
        >
          <Typography
            sx={{
              textTransform: "capitalize",
              color: "#000000",
              fontSize: "14px",
            }}
          >
            Sort &amp; filter{" "}
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "#3884F7",
              fontSize: "16px",
            }}
          >
            reset{" "}
          </Typography>
        </Stack>

        <Divider />

        {/* price range  */}
        <Box sx={{ p: "25px 10px" }}>
          <Typography sx={{ fontSize: "16px", color: "#000000", mb: "8px" }}>
            Price Range
          </Typography>

          <Divider sx={{ border: "1px solid #E0E0E1" }} />

          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ my: "18px", flexWrap: "wrap" }}
          >
            <Box>
              <Typography sx={{ fontSize: "12px", color: "#000000" }}>
                Minimum
              </Typography>
              <Typography
                sx={{ fontSize: "16px", color: "#000000", fontWeight: "600" }}
              >
                500
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: "12px", color: "#000000" }}>
                Maximum
              </Typography>
              <Typography
                sx={{ fontSize: "16px", color: "#000000", fontWeight: "600" }}
              >
                2500
              </Typography>
            </Box>
          </Stack>

          <Slider
            sx={{ m: "0px" }}
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
        <Box sx={{ p: "25px 10px" }}>
          <Typography
            sx={{
              textTransform: "capitalize",
              color: "#000000",
              fontSize: "16px",
              mb: "8px",
            }}
          >
            Class
          </Typography>
          <Divider sx={{ border: "1px solid #E0E0E1" }} />

          <FormGroup sx={{ p: "15px 0px" }}>
            <FormControlLabel
              sx={{
                p: "0px",
                m: "0px",
                fontSize: "16px",
                color: "#000000",
                fontWeight: "400",
              }}
              control={
                <Checkbox
                  sx={{
                    p: "0px",
                    m: "5px 5px 5px -4px",
                    fontSize: "16px",
                    color: "#757575",
                  }}
                  defaultChecked
                />
              }
              label="Ac(40)"
            />
            <FormControlLabel
              sx={{
                p: "0px",
                m: "0px",
                fontSize: "16px",
                color: "#000000",
                fontWeight: "400",
              }}
              control={
                <Checkbox
                  sx={{
                    p: "0px",
                    m: "5px 5px 5px -4px",
                    fontSize: "16px",
                    color: "#757575",
                  }}
                />
              }
              label="Non Ac(20)"
            />
          </FormGroup>
        </Box>

        <Divider />

        {/* schedule  */}
        <Box sx={{ p: "25px 10px" }}>
          <Typography
            sx={{
              mb: "8px",
              fontSize: "16px",
              color: "#000000",
              fontWeight: "500",
            }}
          >
            Schedule
          </Typography>
          <Divider sx={{ border: "1px solid #E0E0E1" }} />
          <Box sx={{ p: "25px 0px" }}>
            <Typography
              sx={{
                mb: "8px",
                fontSize: "14px",
                color: "#4C4C4C",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              Departure Time
            </Typography>

            <FormGroup>
              <FormControlLabel
                sx={{
                  border: "1px solid #F3F3F6",
                  p: "0px",
                  m: "0px 0px 8px",
                  fontSize: "16px",
                  color: "#000000",
                  fontWeight: "500",
                  borderRadius: "3px",
                }}
                control={<Checkbox />}
                label="00:00-05:45"
              />

              <FormControlLabel
                sx={{
                  border: "1px solid #F3F3F6",
                  p: "0px",
                  m: "0px 0px 8px",
                  fontSize: "16px",
                  color: "#000000",
                  fontWeight: "500",
                  borderRadius: "3px",
                }}
                control={<Checkbox />}
                label="00:00-05:45"
              />
              <FormControlLabel
                sx={{
                  border: "1px solid #F3F3F6",
                  p: "0px",
                  m: "0px 0px 8px",
                  fontSize: "16px",
                  color: "#000000",
                  fontWeight: "500",
                  borderRadius: "3px",
                }}
                control={<Checkbox />}
                label="00:00-05:45"
              />
              <FormControlLabel
                sx={{
                  border: "1px solid #F3F3F6",
                  p: "0px",
                  m: "0px 0px 8px",
                  fontSize: "16px",
                  color: "#000000",
                  fontWeight: "500",
                  borderRadius: "3px",
                }}
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
