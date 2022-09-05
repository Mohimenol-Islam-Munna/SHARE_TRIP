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
  margin: 16px 0px;
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
  background-color: #FFFFFF;
  border-radius: 0px;
  opacity: 1;
  `
);

const TicketSummary = () => {
  return (
    <>
      <Box
        sx={{
          padding: "20px 12px",
          backgroundColor: "#E5F2FE",
          textAlign: "right",
        }}
      >
        <Typography variant="caption" sx={{ fontSize: "10px" }}>
          Per Person
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            textTransform: "uppercase",
            color: "#235FD8",
          }}
        >
          bdt 750
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            textTransform: "uppercase",
            color: "#1882FF",
          }}
        >
          bdt 775
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#1882FF", fontSize: "14px", my: "15px" }}
        >
          view seats
        </Button>
        <Typography
          sx={{
            fontSize: "14px",
            textTransform: "capitalize",
            color: "#1882FF",
          }}
        >
          cancellation policy
        </Typography>
      </Box>

      <Box sx={{ borderLeft: "1px solid lightgray" }}>
        <TabsUnstyled defaultValue={0}>
          <Box sx={{ px: "10px" }}>
            <TabsList>
              <Tab>
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
          </Box>

          <TabPanel value={0}>
            <Box sx={{ px: "10px", pb: "20px" }}>
              <Box sx={{ color: "#4C4C4C", py: "8px" }}>
                <Stack direction="row" alignItems="center">
                  <IconButton sx={{ p: "5px" }}>
                    <WeekendIcon />
                  </IconButton>
                  <Box sx={{ flexGrow: "1" }}>
                    <Typography
                      sx={{
                        color: "#4C4C4C",
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >
                      b4 b-class
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "14px",
                      textTransform: "uppercase",
                    }}
                  >
                    bdt 750
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <IconButton sx={{ p: "5px" }}>
                    <WeekendIcon />
                  </IconButton>
                  <Box sx={{ flexGrow: "1" }}>
                    <Typography
                      sx={{
                        color: "#4C4C4C",
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >
                      c4 c-class
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "14px",
                      textTransform: "uppercase",
                    }}
                  >
                    bdt 750
                  </Typography>
                </Stack>
              </Box>
              <Divider />
              <Box sx={{ color: "#4C4C4C", py: "8px" }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: "8px" }}
                >
                  <Typography
                    sx={{
                      color: "#4C4C4C",
                      fontSize: "14px",
                      textTransform: "capitalize",
                    }}
                  >
                    charge :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "14px",
                      textTransform: "uppercase",
                    }}
                  >
                    bdt 50
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      color: "#4C4C4C",
                      fontSize: "14px",
                      textTransform: "capitalize",
                    }}
                  >
                    insurance :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "14px",
                      textTransform: "uppercase",
                    }}
                  >
                    bdt 20
                  </Typography>
                </Stack>
              </Box>
              <Divider />
              <Box sx={{ color: "#4C4C4C", py: "8px" }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      color: "#4C4C4C",
                      fontSize: "14px",
                      textTransform: "capitalize",
                    }}
                  >
                    sub total :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "16px",
                      textTransform: "uppercase",
                    }}
                  >
                    bdt 1570
                  </Typography>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ backgroundColor: "#FAFAFA", p: "10px" }}>
              <FormGroup sx={{ fontSize: "12px" }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Typography sx={{ color: "#4C4C4C", fontSize: "14px" }}>
                      I want to avail insurance service
                    </Typography>
                  }
                />
              </FormGroup>
              <Button
                fullWidth
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#1882FF",
                  color: "white",
                  fontSize: "12px",
                  py: "10px",
                  textTransform: "uppercase",
                }}
              >
                Select &amp; continue to return
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value={1}>
            <Box sx={{ px: "10px", pb: "20px" }}>Policy Details</Box>
          </TabPanel>
        </TabsUnstyled>
      </Box>
    </>
  );
};

export default TicketSummary;
