import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

import DiamondIcon from "@mui/icons-material/Diamond";
import BoltIcon from "@mui/icons-material/Bolt";
import WeekendIcon from "@mui/icons-material/Weekend";

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  width: 100%;
  background-color: #FFFFFF;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `
);

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #4c4c4c;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 50%;
  padding: 8px;
  border: none;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #3884f7;
  }

  &:focus {
    color: #fff;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #3884f7;
    color: #fff;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  background: ${theme.palette.mode === "dark" ? "gray" : "#fff"};
  border-radius: 0px;
  `
);

const TicketSummary = () => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid salmon",
          padding: "20px 12px",
          backgroundColor: "#E5F2FE",
        }}
      >
        <Typography>Per Person</Typography>
        <Typography>bdt 750</Typography>
        <Typography>bdt 775</Typography>
        <Button>view seats</Button>
        <Typography>cancellation policy</Typography>
      </Box>

      <Box>
        <TabsUnstyled defaultValue={0}>
          <TabsList  sx={{ p: "10px" }}>
            <Tab >
              <Typography sx={{ textTransform: "uppercase" }}>
                Seat Info
              </Typography>
            </Tab>
            <Tab>
              <Typography sx={{ textTransform: "uppercase" }}>
                Policy
              </Typography>
            </Tab>
          </TabsList>

          <TabPanel value={0}>
            <Box sx={{ p: "10px" }}>
              <Box>
                <Stack direction="row" alignItems="center">
                  <IconButton sx={{ p: "5px" }}>
                    <WeekendIcon />
                  </IconButton>
                  <Box sx={{ flexGrow: "1" }}>
                    <Typography>b4 b-class</Typography>
                  </Box>
                  <Typography sx={{}}>bdt 750</Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <IconButton sx={{ p: "5px" }}>
                    <WeekendIcon />
                  </IconButton>
                  <Box sx={{ flexGrow: "1" }}>
                    <Typography>c4 c-class</Typography>
                  </Box>
                  <Typography sx={{}}>bdt 750</Typography>
                </Stack>
              </Box>
              <Divider />
              <Box>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>charge : </Typography>
                  <Typography>bdt 50</Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>insurance : </Typography>
                  <Typography>bdt 20</Typography>
                </Stack>
              </Box>
              <Divider />
              <Box>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>sub total : </Typography>
                  <Typography>bdt 1570</Typography>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ backgroundColor: "lightgray", p: "10px" }}>
              <FormGroup sx={{ fontSize: "12px" }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I want to avail insurance service"
                />
              </FormGroup>
              <Button fullWidth variant="contained" size="small">
                Select &amp; continue to return
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value={1}>Policy Details</TabPanel>
        </TabsUnstyled>
      </Box>
    </>
  );
};

export default TicketSummary;
