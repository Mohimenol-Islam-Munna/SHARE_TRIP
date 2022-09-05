import React, { useState } from "react";

// mui components
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

// icons
import DiamondIcon from "@mui/icons-material/Diamond";
import BoltIcon from "@mui/icons-material/Bolt";

// import components
import TicketInfo from "../components/TicketInfo";

// tab unstyled
const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  min-width: 400px;
  background-color: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === "dark" ? "grey" : "grey"};
  `
);

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #4c4c4c;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 0px;
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
  border-radius: 5px;
  `
);

const MainContent = () => {
  return (
    <Box>
      {/* total transport  */}
      <Typography>{48} Available Buses</Typography>

      {/* options tabs  */}
      <Box sx={{ mt: "20px" }}>
        <TabsUnstyled defaultValue={1}>
          <TabsList>
            <Tab>
              <MenuItem
                disableRipple={true}
                sx={{
                  padding: "7px",
                  width: "100%",
                  margin: "0px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <ListItemIcon>
                  <DiamondIcon fontSize="small" />
                </ListItemIcon>
                Earliest Buses
              </MenuItem>
            </Tab>
            <Tab>
              <MenuItem
                disableRipple={true}
                sx={{
                  padding: "7px",
                  width: "100%",
                  margin: "0px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <ListItemIcon>
                  <DiamondIcon fontSize="small" />
                </ListItemIcon>
                Cheapest Buses
              </MenuItem>
            </Tab>
            <Tab>
              <MenuItem
                disableRipple={true}
                sx={{
                  padding: "7px",
                  width: "100%",
                  margin: "0px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <ListItemIcon>
                  <BoltIcon fontSize="small" />
                </ListItemIcon>
                Available Buses
              </MenuItem>
            </Tab>
            <Tab>
              <MenuItem
                disableRipple={true}
                sx={{
                  padding: "7px",
                  width: "100%",
                  margin: "0px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <ListItemIcon>
                  <BoltIcon fontSize="small" />
                </ListItemIcon>
                Fastest Buse
              </MenuItem>
            </Tab>
          </TabsList>
          <TabPanel value={0}>Earliest Buses</TabPanel>
          <TabPanel value={1}>
            <TicketInfo />
          </TabPanel>
          <TabPanel value={2}>Available Buses</TabPanel>
          <TabPanel value={3}>Fastest Buses</TabPanel>
        </TabsUnstyled>
      </Box>
    </Box>
  );
};

export default MainContent;
