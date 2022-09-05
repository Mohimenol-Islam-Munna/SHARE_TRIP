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
import WeekendIcon from "@mui/icons-material/Weekend";

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
    <Box sx={{ border: "1px solid red" }}>
      <Box sx={{ padding: "20px 12px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <Typography
            component="h4"
            sx={{
              m: "0px",
            }}
          >
            Ac
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              component="h3"
              sx={{
                m: "0px",
                py: "5px",
                px: "12px",
                backgroundColor: "#BBDDFF",
                borderRadius: "16px",
                fontSize: "16px",
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

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              component="span"
              sx={{
                mr: "10px",
                width: "18px",
                height: "18px",
                display: " flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FCD847",
                borderRadius: "50%",
                fontSize: "12px",
              }}
            >
              {" "}
              &#2547;{" "}
            </Typography>
            <Typography
              component="h4"
              sx={{
                m: "0px",
              }}
            >
              {" "}
              55
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ mt: "20px", p: "20px 12px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <List dense={true} sx={{ py: "0px", m: "0px" }}>
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText
                  primary="From"
                  sx={{ p: "0px", m: "0px", color: "#4C4C4C" }}
                />
              </ListItem>
              <ListItem sx={{ p: "0px", m: "0px", mt: "5px" }}>
                <ListItemText
                  primary="Dhaka"
                  sx={{
                    p: "0px",
                    m: "0px",
                    fontSize: "16px",
                    textTransform: "uppercase",
                    color: "#000000",
                  }}
                />
              </ListItem>{" "}
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText
                  primary="11:35 PM"
                  sx={{
                    p: "0px",
                    m: "0px",
                    fontSize: "16px",
                    textTransform: "uppercase",
                    color: "#000000",
                    " & .MuiListItemText-primary": {
                      fontWeight: "bold",
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText
                  primary="colabagan counter"
                  sx={{
                    p: "0px",
                    m: "0px",
                    fontSize: "14px",
                    textTransform: "Capitalize",
                    color: "#4C4C4C",
                  }}
                />
              </ListItem>
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText
                  primary="5 sept 2022"
                  sx={{
                    p: "0px",
                    m: "0px",
                    fontSize: "12px",
                    textTransform: "capitalize",
                    color: "#4C4C4C",
                  }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Button
              sx={{ textAlign: "center", p: "0px", m: "0px" }}
              startIcon={<Box sx={{ color: "#C7C7CC" }}>--------</Box>}
              endIcon={
                <Stack
                  direction="row"
                  sx={{ alignItems: "center", color: "#C7C7CC" }}
                >
                  -------
                  <KeyboardArrowRightIcon sx={{ mt: "3px", ml: "-8px" }} />
                </Stack>
              }
            >
              <AirportShuttleIcon sx={{ color: "#1882FF" }} />
            </Button>
            <Typography sx={{ color: "#EF7E46" }}>
              {16} seats available
            </Typography>
            <Typography sx={{ color: "#4C4C4C", mt: "5px" }}>
              {16}h 00m
            </Typography>
          </Box>

          <Box>
            <List dense={true} sx={{ py: "0px", m: "0px" }}>
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText
                  primary="To"
                  sx={{ p: "0px", m: "0px", color: "#4C4C4C" }}
                />
              </ListItem>
              <ListItem sx={{ p: "0px", m: "0px", mt: "5px" }}>
                <ListItemText
                  primary="Chottogram"
                  sx={{
                    p: "0px",
                    m: "0px",
                    fontSize: "16px",
                    textTransform: "uppercase",
                    color: "#000000",
                  }}
                />
              </ListItem>

              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText
                  primary="11:35 PM"
                  sx={{
                    p: "0px",
                    m: "0px",
                    fontSize: "16px",
                    textTransform: "uppercase",
                    color: "#000000",
                    " & .MuiListItemText-primary": {
                      fontWeight: "bold",
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText
                  primary="colabagan counter"
                  sx={{
                    p: "0px",
                    m: "0px",
                    fontSize: "14px",
                    textTransform: "Capitalize",
                    color: "#4C4C4C",
                  }}
                />
              </ListItem>
              <ListItem sx={{ p: "0px", m: "0px" }}>
                <ListItemText
                  primary="5 sept 2022"
                  sx={{
                    p: "0px",
                    m: "0px",
                    fontSize: "12px",
                    textTransform: "capitalize",
                    color: "#4C4C4C",
                  }}
                />
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ mt: "20px", p: "20px 12px" }}>
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
          // justifyContent="center"
          alignItems="center"
          sx={{
            p: "8px 16px 8px 16px",
            backgroundColor: "#FAFAFA",
            color: "white",
            flexWrap: "wrap",
          }}
        >
          <Button
            sx={{
              color: "#4C4C4C",
              fontSize: "12px",
              textTransform: "capitalize",
              p: "0px",
              m: "0px",
              flexBasis: "20%",
              border: "1px solid red"
            }}
            startIcon={<WeekendIcon sx={{ color: "#DB6848" }} />}
          >
            {3} sold out
          </Button>

          <Button
            sx={{
              color: "#4C4C4C",
              fontSize: "12px",
              textTransform: "capitalize",
              p: "0px",
              m: "0px",
              flexBasis: "20%",
              
            }}
            startIcon={<WeekendIcon sx={{ color: "#EB950E" }} />}
          >
            {2} booked
          </Button>

          <Button
            sx={{
              color: "#4C4C4C",
              fontSize: "12px",
              textTransform: "capitalize",
              p: "0px",
              m: "0px",
              flexBasis: "20%",
            }}
            startIcon={<WeekendIcon sx={{ color: "#2E7D31" }} />}
          >
            {2} selected
          </Button>

          <Button
            sx={{
              color: "#4C4C4C",
              fontSize: "12px",
              textTransform: "capitalize",
              p: "0px",
              m: "0px",
              flexBasis: "20%",
            }}
            startIcon={<WeekendIcon sx={{ color: "#5BB4FF" }} />}
          >
            {14} available
          </Button>

          <Button
            sx={{
              color: "#4C4C4C",
              fontSize: "12px",
              textTransform: "capitalize",
              p: "0px",
              m: "0px",
              flexBasis: "20%",
            }}
            startIcon={<WeekendIcon sx={{ color: "#8E8E93" }} />}
          >
            {20} Blocked
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default TicketDetails;
