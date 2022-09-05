import React, { useState } from "react";

// mui components
import Box from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Stack";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// icons
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";

const TicketDetails = () => {
  const [boardingValue, setBoardingValue] = useState("");
  const [droppingValue, setDroppingValue] = useState("");

  //   boarding change handler
  const boardingChangeHandler = (e) => {
    setBoardingValue(e.target.value);
  };

  //   dropping change handler
  const droppingChangeHandler = (e) => {
    setDroppingValue(e.target.value);
  };

  return (
    <Box sx={{ border: "1px solid salmon", padding: "20px 12px" }}>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: "5px", backgroundColor: "gray" }}
        >
          <Typography component="h3">Ac</Typography>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              component="h3"
              sx={{
                py: "5px",
                px: "10px",
                backgroundColor: "yellow",
                borderRadius: "15px",
                mb: "5px",
              }}
            >
              Hanif Enterprise
            </Typography>
            <Typography
              variant="caption"
              sx={{
                m: "0px",
                fontSize: "11px",
              }}
            >
              31-DHK-CTG(AC)
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              component="span"
              sx={{
                mr: "10px ",
                py: "3px",
                px: "5px",
                backgroundColor: "yellow",
                borderRadius: "50%",
              }}
            >
              {" "}
              &#2547;{" "}
            </Typography>
            <Typography> 55</Typography>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ mt: "20px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: "5px" }}
        >
          <Box>
            <List
              dense={true}
              sx={{ border: "1px solid red", p: "0px", m: "0px" }}
            >
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText primary="From" sx={{ p: "0px", m: "0px" }} />
              </ListItem>
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText primary="Dhaka" sx={{ p: "0px", m: "0px" }} />
              </ListItem>{" "}
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText primary="11:35 PM" sx={{ p: "0px", m: "0px" }} />
              </ListItem>
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText
                  primary="colabagan counter"
                  sx={{ p: "0px", m: "0px" }}
                />
              </ListItem>
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText
                  primary="5 sept 2022"
                  sx={{ p: "0px", m: "0px" }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Button
              sx={{ textAlign: "center", p: "0px" }}
              startIcon={<Box>--------</Box>}
              endIcon={
                <Stack direction="row" sx={{ alignItems: "center" }}>
                  -------
                  <KeyboardArrowRightIcon sx={{ mt: "3px", ml: "-8px" }} />
                </Stack>
              }
            >
              <AirportShuttleIcon />
            </Button>
            <Typography>{16} seats available</Typography>
            <Typography>{16}h 00m</Typography>
          </Box>

          <Box>
            <List
              dense={true}
              sx={{ border: "1px solid red", p: "0px", m: "0px" }}
            >
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText primary="To" sx={{ p: "0px", m: "0px" }} />
              </ListItem>
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText primary="Dhaka" sx={{ p: "0px", m: "0px" }} />
              </ListItem>{" "}
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText primary="11:35 PM" sx={{ p: "0px", m: "0px" }} />
              </ListItem>
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText
                  primary="colabagan counter"
                  sx={{ p: "0px", m: "0px" }}
                />
              </ListItem>
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText
                  primary="5 sept 2022"
                  sx={{ p: "0px", m: "0px" }}
                />
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ mt: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl sx={{ my: 1, minWidth: 120 }} size="small" fullWidth>
              <InputLabel id="Boarding-Point">Boarding Point</InputLabel>
              <Select
                labelId="Boarding-Point"
                id="Boarding-Point"
                value={boardingValue}
                label="Boarding Point"
                onChange={(e) => boardingChangeHandler(e)}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl sx={{ my: 1, minWidth: 120 }} size="small" fullWidth>
              <InputLabel id="Dropping-Point">Dropping Point</InputLabel>
              <Select
                labelId="Dropping-Point"
                id="Dropping-Point"
                value={droppingValue}
                label="Dropping Point"
                onChange={(e) => droppingChangeHandler(e)}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: "5px", backgroundColor: "gray", color: "white" }}
        >
          <Button
            sx={{
              color: "white",
              fontSize: "12px",
              textTransform: "capitalize",
            }}
            startIcon={<AirportShuttleIcon sx={{ color: "white" }} />}
          >
            {3} sold out
          </Button>
          <Button
            sx={{
              color: "white",
              fontSize: "12px",
              textTransform: "capitalize",
            }}
            startIcon={<AirportShuttleIcon sx={{ color: "white" }} />}
          >
            {2} booked
          </Button>
          <Button
            sx={{
              color: "white",
              fontSize: "12px",
              textTransform: "capitalize",
            }}
            startIcon={<AirportShuttleIcon sx={{ color: "white" }} />}
          >
            {2} selected
          </Button>
          <Button
            sx={{
              color: "white",
              fontSize: "12px",
              textTransform: "capitalize",
            }}
            startIcon={<AirportShuttleIcon sx={{ color: "white" }} />}
          >
            {14} available
          </Button>
          <Button
            sx={{
              color: "white",
              fontSize: "12px",
              textTransform: "capitalize",
            }}
            startIcon={<AirportShuttleIcon sx={{ color: "white" }} />}
          >
            {20} Blocked
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default TicketDetails;
