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
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.15);
  `
);

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #4c4c4c;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  flex-basis: 25%;
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
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.15);
  `
);

const MainContent = () => {
  return (
    <Box sx={{ p: "10px" }}>
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
